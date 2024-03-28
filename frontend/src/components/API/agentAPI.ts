import axios from "axios";
import { API_URL_TO_AGENTS } from "../consts/APIConsts";
import { Agent } from "../interfaces/Agent";

export const getAllAgents = async () => {
  const res = await axios.get<Agent[]>(API_URL_TO_AGENTS);

  return res.data;
};

export const getAgentById = async ({ id }: { id: number }) => {
  const res = await axios.get<Agent>(API_URL_TO_AGENTS + id);

  return res.data;
};

export const addAgent = async ({
  name,
  email,
  phone,
}: {
  name: string;
  email: string;
  phone: string;
}) => {
  const res = await axios.post<Agent>(API_URL_TO_AGENTS, {
    name,
    email,
    phone,
  });

  return res.data;
};

export const updateAgent = async ({
  id,
  name,
  email,
  phone,
}: {
  id: number;
  name: string;
  email: string;
  phone: string;
}) => {
  const res = await axios.patch<Agent>(API_URL_TO_AGENTS + id, {
    name,
    email,
    phone,
  });

  return res.data;
};

export const deleteAgent = async ({ id }: { id: number }) => {
  const res = await axios.delete<Agent>(API_URL_TO_AGENTS + id);

  return res.data;
};

