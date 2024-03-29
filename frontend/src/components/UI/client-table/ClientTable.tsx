import React, { FC } from "react";
import { useClients } from "../../hooks/client-hooks/useClients";
import classes from "./ClientTable.module.css";
import { Button, Spinner, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { Client } from "../../interfaces/Client";

const ClientTable: FC = () => {
  const { data, refetch } = useClients();
  const [allowRefetch, setAllowRefetch] = React.useState<boolean>(true);
  if (!data && allowRefetch) {
    refetch().then(() => {
      setAllowRefetch(false);
    });

    return <Spinner color="purple" />;
  }

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
                    <Button colorScheme="red">Delete</Button>
                  </div>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ClientTable;
