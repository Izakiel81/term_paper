import { Tabs, TabList, Tab, TabIndicator, TabPanels, TabPanel } from "@chakra-ui/react";
import { FC } from "react";
import AgentsTable from "../agents-table/AgentsTable";
import ClientTable from "../client-table/ClientTable";
import PropertyTable from "../property-table/PropertyTable";
import TransactionTable from "../transactions-table/TransactionTable";


const MainPage:FC = () => {
  return (
    <Tabs position="relative" variant="unstyled">
      <TabList>
        <Tab>Agents</Tab>
        <Tab>Clients</Tab>
        <Tab>Properties</Tab>
        <Tab>Transactions</Tab> 
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      <TabPanels>
        <TabPanel>
          <AgentsTable/>
        </TabPanel>
        <TabPanel>
          <ClientTable/>
        </TabPanel>
        <TabPanel>
          <PropertyTable/>
        </TabPanel>
        <TabPanel>
          <TransactionTable/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default MainPage;
