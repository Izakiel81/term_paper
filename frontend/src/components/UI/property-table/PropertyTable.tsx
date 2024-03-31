import React, { FC, useState } from "react";
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
  Input,
  Select,
} from "@chakra-ui/react";
import { useProperties } from "../../hooks/property-hooks/useProperties";
import { Property } from "../../interfaces/Property";
import { useAddPropertyMutation } from "../../hooks/property-hooks/useAddPropertyMutation";
import { useDeletePropertyMutation } from "../../hooks/property-hooks/useDeletePropertyMutation";
import DialogOverlay from "../dialog-overlay/DialogOverlay";

const PropertyTable: FC = () => {
  const { data, refetch } = useProperties();
  const [allowRefetch, setAllowRefetch] = React.useState<boolean>(true);

  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [instanceToDelte, setInstanceToDelete] = useState<string>("");
  const [instanceIdToDelete, setInstanceIdToDelete] = useState<number | null>(
    null
  );

  const [address, setAddress] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const { mutateAsync: deleteInstanceMutation } = useDeletePropertyMutation();
  const { mutateAsync: addInstanceMutation } = useAddPropertyMutation();

  if (!data && allowRefetch) {
    refetch().then(() => {
      setAllowRefetch(false);
    });

    return <Spinner color="purple" />;
  }

  const deleteInstance = async () => {
    if (showDialog && instanceIdToDelete !== null) {
      await deleteInstanceMutation({
        id: instanceIdToDelete,
      }).then(() => {
        refetch();
      });
    }
    setShowDialog(false);
  };

  const addInstance = async () => {
    if (address !== "" && type !== "" && price !== "" && status !== "") {
      await addInstanceMutation({
        address: address,
        type: type,
        price: parseFloat(price),
        status: status,
      }).then(() => {
        refetch();
      });
    }
  };

  const handleChange = (value: string) => {
    if (/[^0-9-]/.test(value)) return;
    setPrice(value);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.button_container}>
        <Input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />
        <Select
          placeholder="Select type"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          <option value="House">House</option>
        </Select>
        <Input
          value={price}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Price"
        />
        <Select
          placeholder="Select status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
          <option value="Sold">Sold</option>
        </Select>

        <Button
          colorScheme="purple"
          size="md"
          onClick={addInstance}
          isDisabled={
            address === "" || type === "" || price === "" || status === ""
          }
        >
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
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        setShowDialog(true);
                        setInstanceToDelete(property.Address);
                        setInstanceIdToDelete(property.Id);
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
          header={`Are you sure you want to delete:\n${instanceToDelte}?`}
        />
      )}
    </div>
  );
};

export default PropertyTable;
