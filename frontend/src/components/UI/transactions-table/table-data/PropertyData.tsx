import { Spinner, Td } from "@chakra-ui/react";
import { FC, useState } from "react";
import { useGetPropertyById } from "../../../hooks/property-hooks/useGetPropertyById";

type Props = {
  property_id: number;
};

const PropertyData: FC<Props> = ({ property_id }) => {
  const { data, refetch } = useGetPropertyById({ id: property_id });
  const [allowRefetch, setAllowRefetch] = useState<boolean>(true);
  if (!data && allowRefetch) {
    refetch().then(() => {
      setAllowRefetch(false);
    });
    return <Spinner color="purple" />;
  }
  return <Td>{ data && (data.Address)}</Td>;
};

export default PropertyData;
