import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Center,
  Image,
  Pressable,
} from "native-base";
import Test from "../assets/test.png";
import { useHistory } from "react-router";

const FavCard = ({ name, genre, platform, path }) => {
  const history = useHistory();
  const handleRedirect = () => {
    history.push(path);
  };
  return (
    <Pressable onPress={handleRedirect}>
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
    </Pressable>
  );
};
export default FavCard;
