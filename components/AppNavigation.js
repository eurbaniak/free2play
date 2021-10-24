import React from "react";
import { Box, Flex, Text, Icon, Center } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppNavigation = () => {
  return (
    <Box w="100%" h="120" bg="dark.100" color="secondary.50" shadow="10">
      <Flex direction="row" justify="space-around" align="center">
        <Center py={5}>
          <Icon
            color="neutral.50"
            mb="1"
            as={<MaterialCommunityIcons name="home" />}
            size="sm"
          />
          {/* <Text color="neutral.50">home</Text> */}
        </Center>
        <Center>
          <Icon
            color="neutral.50"
            mb="1"
            as={<MaterialCommunityIcons name="google-controller" />}
            size="sm"
          />
          {/* <Text color="neutral.50">games</Text> */}
        </Center>
        <Center>
          <Icon
            color="neutral.50"
            mb="1"
            as={<MaterialCommunityIcons name="book-open-outline" />}
            size="sm"
          />
          {/* <Text color="neutral.50">games</Text> */}
        </Center>
        <Center>
          <Icon
            color="neutral.50"
            mb="1"
            as={<MaterialCommunityIcons name="bookmark" />}
            size="sm"
          />
          {/* <Text color="neutral.50">games</Text> */}
        </Center>
      </Flex>
    </Box>
  );
};
export default AppNavigation;
