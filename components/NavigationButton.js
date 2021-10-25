import React from "react";
import { IconButton, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useHistory, useLocation } from "react-router-native";

const NavigationButton = ({ icon, sel, selected, setter, path }) => {
  const history = useHistory();
  const location = useLocation();
  const handleChangeRoute = () => {
    setter(sel);
    history.push(path);
  };
  return (
    <IconButton
      mb="1"
      icon={
        <Icon
          color={location.pathname == path && sel ? "primary.50" : "neutral.50"}
          as={<MaterialCommunityIcons name={icon} />}
        />
      }
      size="sm"
      onPress={handleChangeRoute}
      _pressed={{
        bg: "primary.50:alpha.20",
        borderRadius: "50",
      }}
    />
  );
};

export default NavigationButton;
