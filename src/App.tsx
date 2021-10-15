import "./styles.css";
// 1. import `ChakraProvider` component
import { ChakraProvider, Text } from "@chakra-ui/react";
import { MuiTable } from "./tables/MuiTable";
import { DenseHeightGrid } from "./tables/DenseHeightGrid";

export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Text fontSize="5xl" fontWeight="black">
          Chakra-UI + Material-UI Data Grid
        </Text>
      </div>
      <div style={{ maxWidth: "90%", display: "flex", justifyItems: "center" }}>
        <MuiTable />
      </div>
      <div>
        <DenseHeightGrid />
      </div>
    </ChakraProvider>
  );
}
