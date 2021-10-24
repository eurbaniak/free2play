import { Box, Text, Flex, Image, Heading, Center } from "native-base";
import React from "react";
import Test from "../assets/test.png";

const ExploreCard = ({ item }) => {
  const { title, genre, platform } = item;
  return (
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
  );
};

export default ExploreCard;
