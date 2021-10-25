import React from "react";
import { Box, Text, Button, Flex, Heading, Image, Center } from "native-base";
import Test from "../assets/test.png";

const ViewGame = ({ item }) => {
  return (
    <Flex direction="column" w="100%" pt="10" justify="space-between" flex={1}>
      <Flex align="center">
        <Image source={Test} h="300" w="200" borderRadius="30" alt="gamelogo" />
        <Heading mt="10" textAlign="center">
          title
        </Heading>
        <Text textAlign="center" mt="10">
          View Game
        </Text>
      </Flex>
      <Button
        bg="primary.50"
        borderRadius="20"
        h="20"
        _pressed={{ bg: "primary.100" }}
        mx="5"
        my="1.5"
      >
        <Text fontSize="xl">Check out</Text>
      </Button>
    </Flex>
  );
};

export default ViewGame;
