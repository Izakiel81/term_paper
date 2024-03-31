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
  Input,
} from "@chakra-ui/react";
import { Agent } from "../../interfaces/Agent";
import DialogOverlay from "../dialog-overlay/DialogOverlay";
import { useDeleteAgentMutation } from "../../hooks/agent-hooks/useDeleteAgentMutation";
import { useAddAgentMutation } from "../../hooks/agent-hooks/useAddAgentMutation";

const AgentsTable: FC = () => {
  const { data, refetch } = useAgents();
  const [allowRefetch, setAllowRefetch] = useState<boolean>(true);

  const [newAgentName, setNewAgentName] = useState<string>("");
  const [newAgentEmail, setNewAgentEmail] = useState<string>("");
  const [newAgentPhone, setNewAgentPhone] = useState<string>("");

  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [instanceToDelte, setInstanceToDelete] = useState<string>("");
  const [instanceIdToDelete, setInstanceIdToDelete] = useState<number | null>(
    null
  );

  const { mutateAsync } = useDeleteAgentMutation();
  const { mutateAsync: addAgentMutate } = useAddAgentMutation();


  if (!data && allowRefetch) {
    refetch().then(() => {
      setAllowRefetch(false);
    });

    return <Spinner color="purple" />;
  }

  const deleteInstance = async () => {
    if (showDialog && instanceIdToDelete !== null) {
     await mutateAsync({
        id: instanceIdToDelete,
      });
    }
    await refetch && refetch();
    setShowDialog(false);
  };

  const addInstance = async () => {
    await addAgentMutate({
      name: newAgentName,
      email: newAgentEmail,
      phone: newAgentPhone,
    });
    setNewAgentEmail("");
    setNewAgentPhone("");
    setNewAgentName("");

    await refetch && refetch();
  };

  const handlePhoneChange = (value: string) => {
    if (/[^0-9-]/.test(value)) return;
    
    if (value.length <= 12) {
      const lastCharIsHyphen =
        value.length > 0 && value[value.length - 1] === "-";

      if (value.length === 3 || value.length === 7) {
        if (!lastCharIsHyphen) {
          setNewAgentPhone(value + "-");
        } else {
          setNewAgentPhone(value);
        }
      } else {
        if (lastCharIsHyphen && value.length < newAgentPhone.length) {
          setNewAgentPhone(value.slice(0, -1));
        } else {
          setNewAgentPhone(value);
        }
      }
    }
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.button_container}>
        <Input
          placeholder="Name"
          onChange={(e) => setNewAgentName(e.target.value)}
          value={newAgentName}
        />
        <Input
          placeholder="Email"
          onChange={(e) => setNewAgentEmail(e.target.value)}
          value={newAgentEmail}
        />
        <Input
          placeholder="Phone number"
          onChange={(e) => handlePhoneChange(e.target.value)}
          value={newAgentPhone}
        />
        <Button
          colorScheme="purple"
          size="md"
          isDisabled={
            newAgentName.length === 0 ||
            newAgentEmail.length === 0 ||
            newAgentPhone.length === 0
          }
          onClick={addInstance}
        >
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
