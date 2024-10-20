import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { appTheme } from "theme";
import Views from "components/views";
import { AuthProvider } from "store";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={appTheme}>
        <AuthProvider>
          <Views />
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
