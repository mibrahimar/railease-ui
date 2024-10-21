import { Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { TbLogout2 } from "react-icons/tb";

export function Nav() {
  return (
    <Box padding="3" borderBottom="1px">
      <HStack
        maxWidth="4xl"
        height="full"
        marginX="auto"
        justifyContent="space-between"
      >
        <HStack>
          <Image
            height="10"
            width="10"
            rounded="md"
            src="/logo.png"
            alt="RailEase Logo"
          />

          <Heading as="h1" size="md" marginLeft="1">
            RailEase
          </Heading>
        </HStack>

        <HStack spacing="10">
          <Link
            as={RouterLink}
            fontWeight="medium"
            children="Search"
            to="search"
          />
          <Link
            as={RouterLink}
            fontWeight="medium"
            children="Booking History"
            to="history"
          />
        </HStack>

        <Menu placement="top-end">
          <MenuButton>
            <Avatar size="md" name="John Doe" />
          </MenuButton>
          <MenuList>
            <MenuItem as="a" href="#">
              <Icon marginRight="2" as={TbLogout2} />
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}
