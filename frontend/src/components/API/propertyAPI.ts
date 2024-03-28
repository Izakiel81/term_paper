import axios from "axios";
import { API_URL_TO_PROPERIES } from "../consts/APIConsts";
import { Property } from "../interfaces/Property";

export const getAllProperty = async () => {
  const res = await axios.get<Property[]>(API_URL_TO_PROPERIES);

  return res.data;
};

export const getPropertyById = async ({ id }: { id: number }) => {
  const res = await axios.get<Property>(API_URL_TO_PROPERIES + id);

  return res.data;
};

export const addProperty = async ({
  address,
  type,
  price,
  status,
}: {
  address: string;
  type: string;
  price: number;
  status: string;
}) => {
  const res = await axios.post<Property>(API_URL_TO_PROPERIES, {
    address,
    type,
    price,
    status,
  });

  return res.data;
};
