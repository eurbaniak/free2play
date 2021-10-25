import React from "react";
import { Box, Text, FlatList } from "native-base";
import ExploreCard from "./ExploreCard";

const data = [
  {
    id: 1,
    title: "TEST",
    genre: "MMORPG",
    platform: "PC",
  },
  {
    id: 2,
    title: "TEST",
    genre: "MMORPG",
    platform: "PC",
  },
  {
    id: 3,
    title: "TEST",
    genre: "MMORPG",
    platform: "PC",
  },
  {
    id: 4,
    title: "TEST",
    genre: "MMORPG",
    platform: "PC",
  },
  {
    id: 5,
    title: "TEST",
    genre: "MMORPG",
    platform: "PC",
  },
];

const Games = () => {
  return (
    <Box flex={1} w="100%">
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <ExploreCard item={item} key={item.id} />;
        }}
      />
    </Box>
  );
};

export default Games;
