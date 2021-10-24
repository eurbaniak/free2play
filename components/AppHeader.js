//import liraries
import React from "react";
import { Flex, Heading, Box } from "native-base";
import ToggleColorMode from "./ToggleColorMode";

const AppHeader = () => {
  return (
    <Box safeAreaTop w="100%" py="5">
      <Flex direction="row" justify="space-between" align="center" px="5">
        <Heading>FreeGames</Heading>
        <ToggleColorMode />
      </Flex>
    </Box>
  );
};

export default AppHeader;
