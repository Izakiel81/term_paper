import React, { FC, useState } from "react";
import { useClients } from "../../hooks/client-hooks/useClients";
import classes from "./ClientTable.module.css";
import {
  Button,
  Input,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Client } from "../../interfaces/Client";
import { useDeleteClientMutation } from "../../hooks/client-hooks/useDeleteClientMutation";
import { useAddClientMutation } from "../../hooks/client-hooks/useAddClientMutation";
import DialogOverlay from "../dialog-overlay/DialogOverlay";

const ClientTable: FC = () => {
  const { data, refetch } = useClients();
  const [allowRefetch, setAllowRefetch] = React.useState<boolean>(true);

  const [newAgentName, setNewAgentName] = useState<string>("");
  const [newAgentEmail, setNewAgentEmail] = useState<string>("");
  const [newAgentPhone, setNewAgentPhone] = useState<string>("");

  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [instanceToDelte, setInstanceToDelete] = useState<string>("");
  const [instanceIdToDelete, setInstanceIdToDelete] = useState<number | null>(
    null
  );

  const { mutateAsync: deleteMutate } = useDeleteClientMutation();
  const { mutateAsync: addClientMutate } = useAddClientMutation();

  if (!data && allowRefetch) {
    refetch().then(() => {
      setAllowRefetch(false);
    });

    return <Spinner color="purple" />;
  }

  const addInstance = async () => {
    if (newAgentName !== "" && newAgentEmail !== "" && newAgentPhone !== "") {
      await addClientMutate({
        name: newAgentName,
        email: newAgentEmail,
        phone: newAgentPhone,
      }).then(() => {
        setNewAgentName("");
        setNewAgentEmail("");
        setNewAgentPhone("");
        refetch();
      });
    }
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

  const deleteInstance = async () => {
    if (showDialog && instanceIdToDelete !== null) {
      await deleteMutate({
        id: instanceIdToDelete,
      }).then(() => {
        setShowDialog(false);
        setInstanceIdToDelete(null);
        refetch();
      });
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
            <TableCaption placement="top">Clients</TableCaption>
            <Thead>
              <Tr>
                <Th>client</Th>
                <Th>Email</Th>
                <Th>Phone number</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((client: Client) => (
                <Tr key={client.Id}>
                  <Td>{client.Name}</Td>
                  <Td>{client.Email}</Td>
                  <Td>{client.Phone}</Td>
                  <div className={classes.delete_button_container}>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        setShowDialog(true);
                        setInstanceToDelete(client.Name);
                        setInstanceIdToDelete(client.Id);
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

export default ClientTable;
