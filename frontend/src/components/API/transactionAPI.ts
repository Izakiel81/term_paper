import axios from "axios";
import { API_URL_TO_TRANSACTIONS } from "../consts/APIConsts";
import { Transaction } from "../interfaces/Transaction";

export const getAllTransactions = async () => {
  const res = await axios.get<Transaction[]>(API_URL_TO_TRANSACTIONS);

  return res.data;
};

export const getTransactionById = async ({ id }: { id: number }) => {
  const res = await axios.get<Transaction>(API_URL_TO_TRANSACTIONS + id);

  return res.data;
};

export const addTransaction = async ({
  propertyId,
  clientId,
  agentId,
  amount,
}: {
  propertyId: number;
  clientId: number;
  agentId: number;
  amount: string;
}) => {
  const res = await axios.post<Transaction>(API_URL_TO_TRANSACTIONS, {
    propertyId,
    clientId,
    agentId,
    amount,
  });

  return res.data;
};

export const updateTransaction = async ({
  id,
  propertyId,
  clientId,
  agentId,
  transactionDate,
  amount,
}: {
  id: number;
  propertyId: number;
  clientId: number;
  agentId: number;
  transactionDate: string;
  amount: string;
}) => {
  const res = await axios.patch<Transaction>(API_URL_TO_TRANSACTIONS + id, {
    propertyId,
    clientId,
    agentId,
    transactionDate,
    amount,
  });

  return res.data;
};

export const deleteTransaction = async ({ id }: { id: number }) => {
  const res = await axios.delete<Transaction>(API_URL_TO_TRANSACTIONS + id);

  return res.data;
};