import React from "react";
import { IconButton, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NavigationButton = ({ icon, sel, selected, setter }) => {
  return (
    <IconButton
      mb="1"
      icon={
        <Icon
          color={selected == sel ? "primary.50" : "neutral.50"}
          as={<MaterialCommunityIcons name={icon} />}
        />
      }
      size="sm"
      onPress={() => setter(sel)}
      _pressed={{
        bg: "primary.50:alpha.20",
        borderRadius: "50",
      }}
    />
  );
};

export default NavigationButton;
