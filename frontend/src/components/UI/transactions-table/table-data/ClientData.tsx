import { FC, useState } from "react";
import { useGetClientById } from "../../../hooks/client-hooks/useGetClientById";
import { Spinner, Td } from "@chakra-ui/react";

type Props = {
  client_id: number;
};

const ClientData: FC<Props> = ({ client_id }) => {
  const { data, refetch } = useGetClientById({ id: client_id });
  const [allowRefetch, setAllowRefetch] = useState<boolean>(true);

  if (!data && allowRefetch) {
    refetch().then(() => {
      setAllowRefetch(false);
    });
    return <Spinner color="purple" />;
  }
  return <Td>{data && (data.Name)}</Td>;
};

export default ClientData;
