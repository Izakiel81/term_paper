import { Select, Spinner } from "@chakra-ui/react";
import React, { FC } from "react";
import { useClients } from "../../../hooks/client-hooks/useClients";
import { Client } from "../../../interfaces/Client";

type Props = {
  setClientId: (id: number) => void;
};

const ClientSelector: FC<Props> = ({ setClientId }) => {
  const { data, refetch } = useClients();
  const [allowRefetch, setAllowRefetch] = React.useState<boolean>(true);

  if (!data && allowRefetch) {
    refetch().then(() => {
      setAllowRefetch(false);
    });

    return <Spinner color="purple" />;
  }
  return (
    <Select
      placeholder="Select client"
      onChange={(e) => setClientId(parseInt(e.target.value))}
    >
      {data?.map((client: Client) => (
        <option value={client.Id}>{client.Name}</option>
      ))}
    </Select>
  );
 
};

export default ClientSelector;
