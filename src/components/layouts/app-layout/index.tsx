import { Box } from "@chakra-ui/react";
import { Nav } from "components/shared/nav";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <Box marginBottom="12">
      <Nav />
      <Outlet />
    </Box>
  );
}