import React from "react";
import { Flex, Heading, Text } from "native-base";

const NameSection = ({ name }) => {
  return (
    <Flex direction="row" justify="space-between" align="center" px="10" mt="2">
      <Heading size="md">{name}</Heading>
      <Text color="neutral.200">See All</Text>
    </Flex>
  );
};
export default NameSection;
