import { Spinner, Select } from "@chakra-ui/react";
import React, { FC } from "react";
import { useProperties } from "../../../hooks/property-hooks/useProperties";
import { Property } from "../../../interfaces/Property";

type Props = {
  setPropertyId: (id: number) => void;
};

const PropertySelector: FC<Props> = ({ setPropertyId }) => {
  const { data, refetch } = useProperties();
  const [allowRefetch, setAllowRefetch] = React.useState<boolean>(true);

  if (!data && allowRefetch) {
    refetch().then(() => {
      setAllowRefetch(false);
    });

    return <Spinner color="purple" />;
  }
  return (
    <Select
      placeholder="Select property"
      onChange={(e) => setPropertyId(parseInt(e.target.value))}
    >
      {data?.filter((p: Property) => p.Status !== "Sold").map((property: Property) => (
        <option value={property.Id}>{property.Address}</option>
      ))}
    </Select>
  );
};


export default PropertySelector;
