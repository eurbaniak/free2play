import React from "react";
import { Flex, Heading, Text } from "native-base";
import { Link } from "react-router-native";

const NameSection = ({ name, path }) => {
  return (
    <Flex direction="row" justify="space-between" align="center" px="10" mt="2">
      <Heading size="md">{name}</Heading>
      <Link to={path}>
        <Text color="neutral.200">See All</Text>
      </Link>
    </Flex>
  );
};
export default NameSection;
