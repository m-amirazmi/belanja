import { Box, Flex, Text } from "@chakra-ui/react";

export default function DashboardPage() {
  return (
    <Box>
      {/* Greeting / Heading*/}
      <Flex flexDir="column">
        <Text as="h1" fontSize="xxx-large">
          Hi, Amir! Welcome back.
        </Text>
        <Text color="#888">Keep track your earning and spending everyday!</Text>
      </Flex>
    </Box>
  );
}
