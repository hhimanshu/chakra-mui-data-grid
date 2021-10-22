import "./styles.css";
// 1. import `ChakraProvider` component
import {ChakraProvider, Text} from "@chakra-ui/react";
import {FactTable} from "./tables/FactTable";

export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Text fontSize="xl" fontWeight="black">
          Chakra-UI + Material-UI Data Grid
        </Text>
      </div>
      <div style={{ maxWidth: "90%", display: "flex", justifyItems: "center" }}>
        <FactTable />
      </div>
    </ChakraProvider>
  );
}
