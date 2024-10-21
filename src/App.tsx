import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { appTheme } from "theme";
import Pages from "components/pages";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={appTheme}>
        <Pages />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
