import React, { FC } from "react";
import classes from "./TransactionTable.module.css";
import { useTransactions } from "../../hooks/transaction-hooks/useTransactions";
import {
  Button,
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
import { Transaction } from "../../interfaces/Transaction";
import PropertyData from "./table-data/PropertyData";
import ClientData from "./table-data/ClientData";
import AgentData from "./table-data/AgentData";

const TransactionTable: FC = () => {
  const { data, refetch } = useTransactions();
  const [allowRefetch, setAllowRefetch] = React.useState<boolean>(true);
  if (!data && allowRefetch) {
    refetch().then(() => {
      setAllowRefetch(false);
    });

    return <Spinner color="purple.500" />;
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
            <TableCaption placement="top">Transactions</TableCaption>
            <Thead>
              <Tr>
                <Th>Property</Th>
                <Th>Client</Th>
                <Th>Agent</Th>
                <Th>Date</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((transaction: Transaction) => (
                <Tr key={transaction.Id}>
                  <PropertyData property_id={transaction.PropertyId} />
                  <ClientData client_id={transaction.ClientId} />
                  <AgentData agent_id={transaction.AgentId} />
                  <Td>{new Date(transaction.TransactionDate as string).toLocaleDateString()}</Td>
                  <Td>{transaction.Amount}</Td>
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

export default TransactionTable;
