import React, { useState } from "react";
import { Box, Flex, Icon, Center, IconButton } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NavigationButton from "./NavigationButton";

const AppNavigation = () => {
  const [selected, setSelected] = useState(1);
  return (
    <Box w="100%" h="100" bg="dark.100" color="secondary.50" shadow="10">
      <Flex direction="row" justify="space-around" align="center">
        <Center py={5}>
          <NavigationButton
            icon={"home"}
            sel={1}
            selected={selected}
            setter={setSelected}
          />
        </Center>
        <Center>
          <NavigationButton
            icon={"google-controller"}
            sel={2}
            selected={selected}
            setter={setSelected}
          />
        </Center>
        <Center>
          <NavigationButton
            icon={"book-open-outline"}
            sel={3}
            selected={selected}
            setter={setSelected}
          />
        </Center>
        <Center>
          <NavigationButton
            icon={"bookmark"}
            sel={4}
            selected={selected}
            setter={setSelected}
          />
        </Center>
      </Flex>
    </Box>
  );
};
export default AppNavigation;
