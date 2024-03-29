import { FC, useState } from "react";
import classes from "./AgentsTable.module.css";
import { useAgents } from "../../hooks/agent-hooks/useAgents";
import {
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
  TableCaption,
} from "@chakra-ui/react";
import { Agent } from "../../interfaces/Agent";
import DialogOverlay from "../dialog-overlay/DialogOverlay";
import { useDeleteAgentMutation } from "../../hooks/agent-hooks/useDeleteAgentMutation";

const AgentsTable: FC = () => {
  const { data, refetch } = useAgents();
  const [allowRefetch, setAllowRefetch] = useState<boolean>(true);

  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [instanceToDelte, setInstanceToDelete] = useState<string>("");
  const [instanceIdToDelete, setInstanceIdToDelete] = useState<number | null>(
    null
  );

  const { mutate } = useDeleteAgentMutation();

  if (!data && allowRefetch) {
    refetch().then(() => {
      setAllowRefetch(false);
    });

    return <Spinner color="purple" />;
  }

  const deleteInstance = async () => {
    if (showDialog && instanceIdToDelete !== null) {
      mutate({
        id: instanceIdToDelete,
      });
    }
    (await refetch) && refetch();
    setShowDialog(false);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.button_container}>
        <Button colorScheme="purple" size="md">
          Add
        </Button>
      </div>
      <div className={classes.container}>
        <TableContainer>
          <Table variant="simple" colorScheme="purple" size="lg">
            <TableCaption placement="top">Agents</TableCaption>
            <Thead>
              <Tr>
                <Th>Agent</Th>
                <Th>Email</Th>
                <Th>Phone number</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((agent: Agent) => (
                <Tr key={agent.Id}>
                  <Td>{agent.Name}</Td>
                  <Td>{agent.Email}</Td>
                  <Td>{agent.Phone}</Td>
                  <div className={classes.delete_button_container}>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        setShowDialog(true);
                        setInstanceToDelete(agent.Name);
                        setInstanceIdToDelete(agent.Id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      {showDialog && (
        <DialogOverlay
          onClick={deleteInstance}
          onClose={() => {
            setShowDialog(false);
          }}
          header={`Are you sure you want to delete:\n${instanceToDelte}?`}
        />
      )}
    </div>
  );
};

export default AgentsTable;
