import React, { FC, useState } from "react";
import classes from "./TransactionTable.module.css";
import { useTransactions } from "../../hooks/transaction-hooks/useTransactions";
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
import { Transaction } from "../../interfaces/Transaction";
import PropertyData from "./table-data/PropertyData";
import ClientData from "./table-data/ClientData";
import AgentData from "./table-data/AgentData";
import PropertySelector from "./selectors/PropertySelector";
import ClientSelector from "./selectors/ClientSelector";
import AgentSelector from "./selectors/AgentSelector";
import { useAddTransacionMutation } from "../../hooks/transaction-hooks/useAddTransactionMutation";
import { useDeleteTransactionMutation } from "../../hooks/transaction-hooks/useDeleteTransactionMutation";
import DialogOverlay from "../dialog-overlay/DialogOverlay";

const TransactionTable: FC = () => {
  const { data, refetch } = useTransactions();
  const [allowRefetch, setAllowRefetch] = React.useState<boolean>(true);

  const [property, setProperty] = useState<number>(0);
  const [client, setClient] = useState<number>(0);
  const [agent, setAgent] = useState<number>(0);
  const [price, setPrice] = useState<string>("");

  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [instanceIdToDelete, setInstanceIdToDelete] = useState<number | null>(
    null
  );

  const { mutateAsync: addTransactionMutate } = useAddTransacionMutation();
  const { mutateAsync: deleteTransactionMutate } =
    useDeleteTransactionMutation();

  if (!data && allowRefetch) {
    refetch().then(() => {
      setAllowRefetch(false);
    });

    return <Spinner color="purple.500" />;
  }
  const deleteInstance = async () => {
    if (showDialog && instanceIdToDelete !== null) {
      await deleteTransactionMutate({
        id: instanceIdToDelete,
      }).then(() => {
        refetch();
      });
      setInstanceIdToDelete(null);
      setShowDialog(false);
    }
  };

  const addInstance = async () => {
    await addTransactionMutate({
      propertyId: property,
      clientId: client,
      agentId: agent,
      amount: price,
    }).then(() => {
      refetch();
    });
    setProperty(0);
    setClient(0);
    setAgent(0);
    setPrice("");
  };

  const handleChange = (value: string) => {
    if (/[^0-9-]/.test(value)) return;
    setPrice(value);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.button_container}>
        <PropertySelector setPropertyId={setProperty} />
        <ClientSelector setClientId={setClient} />
        <AgentSelector setAgentId={setAgent} />
        <Input
          value={price}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Price"
        />
        <Button
          colorScheme="purple"
          size="md"
          isDisabled={
            property === 0 || agent === 0 || client === 0 || price === ""
          }
          onClick={addInstance}
        >
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
                  <Td>
                    {new Date(
                      transaction.TransactionDate as string
                    ).toLocaleDateString()}
                  </Td>
                  <Td>{transaction.Amount}</Td>
                  <div className={classes.delete_button_container}>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        setShowDialog(true);
                        setInstanceIdToDelete(transaction.Id);
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
          header={`Are you sure you want to delete this transaction?`}
        />
      )}
    </div>
  );
};

export default TransactionTable;
