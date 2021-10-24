import React from "react";
import { Box, Switch, useColorMode } from "native-base";

function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Switch
        size="sm"
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
        offTrackColor="neutral.50"
        onTrackColor="dark.100"
        onThumbColor="neutral.50"
        offThumbColor="dark.100"
      />
    </Box>
  );
}

export default ToggleColorMode;
