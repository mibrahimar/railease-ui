import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TbLogin2 } from "react-icons/tb";

export function LoginPage() {
  return (
    <Box
      background="white"
      width="full"
      minWidth="400px"
      rounded="lg"
      paddingX="8"
      paddingY="10"
    >
      <VStack>
        <Heading size="md">Welcome Back!</Heading>
        <Text color="subtle" marginBottom="4" fontSize="sm">
          Enter details to login
        </Text>

        <FormControl isInvalid={false} marginBottom="2">
          <FormLabel fontSize="sm">Username</FormLabel>
          <Input type="text" />
          <FormErrorMessage>Username is required.</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={false} marginBottom="4">
          <FormLabel fontSize="sm">Password</FormLabel>
          <Input type="password" />
          <FormErrorMessage>Password is required.</FormErrorMessage>
        </FormControl>

        <Button colorScheme="brand" width="full" marginBottom="1">
          <Icon as={TbLogin2} marginRight="1" />
          Login
        </Button>

        <Text fontSize="sm">
          New user?
          <Link
            marginLeft="1"
            color="brand"
            as={RouterLink}
            to="/auth/register"
          >
            Register
          </Link>
        </Text>
      </VStack>
    </Box>
  );
}
