import { Box, Text, Flex, Image, Heading, Center } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import Test from "../assets/test.png";
import { useHistory } from "react-router-native";

const ExploreCard = ({ item, path }) => {
  const { title, genre, platform } = item;
  const history = useHistory();
  const handleRedirect = () => {
    history.push(path);
  };
  return (
    <Pressable onPress={handleRedirect}>
      <Center>
        <Box flex={1} w="90%" bg="dark.50" mt="5" borderRadius="30">
          <Flex direction="row" align="center" p="5">
            <Box>
              <Image
                source={Test}
                alt="x"
                w="100"
                h="100"
                px="10"
                borderRadius="15"
              />
            </Box>
            <Box mx="10">
              <Heading color="neutral.50">{title}</Heading>
              <Text color="neutral.50">{genre}</Text>
              <Text color="neutral.50">{platform}</Text>
            </Box>
          </Flex>
        </Box>
      </Center>
    </Pressable>
  );
};

export default ExploreCard;
