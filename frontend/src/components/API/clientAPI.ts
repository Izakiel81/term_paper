import axios from "axios";
import { API_URL_TO_CLIENTS } from "../consts/APIConsts";
import { Client } from "../interfaces/Client";

export const getAllClients = async () => {
    const res = await axios.get<Client[]>(API_URL_TO_CLIENTS);

    return res.data;
}

export const getClientById = async ({ id }: { id: number }) => {
    const res = await axios.get<Client>(API_URL_TO_CLIENTS + id);

    return res.data;
} 

export const addClient = async ({
    name,
    email,
    phone,
}: {
    name: string;
    email: string;
    phone: string;
}) => {
    const res = await axios.post<Client>(API_URL_TO_CLIENTS, {
        name,
        email,
        phone,
    });

    return res.data;
}

export const updateClient = async ({
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
    const res = await axios.patch<Client>(API_URL_TO_CLIENTS + id, {
        name,
        email,
        phone,
    });

    return res.data;
}

export const deleteClient = async ({ id }: { id: number }) => {
    const res = await axios.delete(API_URL_TO_CLIENTS + id);

    return res.data;
}