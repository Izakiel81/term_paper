import React, { FC } from "react";
import classes from "./PropertyTable.module.css";
import {
  Button,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Spinner,
} from "@chakra-ui/react";
import { useProperties } from "../../hooks/property-hooks/useProperties";
import { Property } from "../../interfaces/Property";

const PropertyTable: FC = () => {
  const { data, refetch } = useProperties();
  const [allowRefetch, setAllowRefetch] = React.useState<boolean>(true);
  if (!data && allowRefetch) {
    refetch().then(() => {
      setAllowRefetch(false);
    });

    return <Spinner color="purple" />;
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
            <TableCaption placement="top">Properties</TableCaption>
            <Thead>
              <Tr>
                <Th>Address</Th>
                <Th>Type</Th>
                <Th>Price</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((property: Property) => (
                <Tr key={property.Id}>
                  <Td>{property.Address}</Td>
                  <Td>{property.Type}</Td>
                  <Td isNumeric>{property.Price}</Td>
                  <Td>{property.Status}</Td>
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

export default PropertyTable;
