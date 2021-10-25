import React from "react";
import { Box, Heading, Flex, Text, Center } from "native-base";
import { FlatList } from "react-native";
import NameSection from "./NameSection";
import FavCard from "./FavCard";

const data = [
  {
    id: 1,
    name: "one",
    genre: "genre",
    platform: "PC",
  },
  {
    id: 2,
    name: "one",
    genre: "genre",
    platform: "XBOX",
  },
  {
    id: 3,
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
                key={item.id}
                name={item.name}
                genre={item.genre}
                platform={item.platform}
                path={"/view"}
              />
            );
          }}
        />
      </Box>
    </Box>
  );
};

export default Favourite;
