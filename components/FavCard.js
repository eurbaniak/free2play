import React from "react";
import { Flex, Box, Heading, Text, Center, Image } from "native-base";
import Test from "../assets/test.png";

const FavCard = ({ name, genre, platform }) => {
  return (
    <Box mx="3.5" my="50" w="180" flex={1}>
      <Center bg="dark.50" borderRadius="30" position="relative" top="3">
        <Box h="200" w="80%" top="-40">
          <Image source={Test} h="100%" w="100%" borderRadius="20" alt="x" />
        </Box>
        <Center p="1" top="-30">
          <Heading color="neutral.100">{name}</Heading>
          <Text color="neutral.50">{genre}</Text>
          <Text color="neutral.50">{platform}</Text>
        </Center>
      </Center>
    </Box>
  );
};
export default FavCard;
