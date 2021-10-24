import React from "react";
import { Box, Heading, Flex, Text, Center } from "native-base";
import { FlatList } from "react-native";
import NameSection from "./NameSection";
import FavCard from "./FavCard";

const data = [
  {
    name: "one",
    genre: "genre",
    platform: "PC",
  },
  {
    name: "one",
    genre: "genre",
    platform: "XBOX",
  },
  {
    name: "one",
    genre: "genre",
    platform: "PS4",
  },
];

console.log("fav");

const Favourite = () => {
  return (
    <Box flex={1.2} w="100%">
      <NameSection name="Favourites" />
      <Box w="100%" flex={1}>
        <FlatList
          data={data}
          horizontal
          renderItem={({ item }) => {
            return (
              <FavCard
                key={item.index}
                name={item.name}
                genre={item.genre}
                platform={item.platform}
              />
            );
          }}
        />
      </Box>
    </Box>
  );
};

export default Favourite;
