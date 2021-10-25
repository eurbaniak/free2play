import { Box, FlatList } from "native-base";
import React from "react";
import ExploreCard from "./ExploreCard";
import NameSection from "./NameSection";

const data = [
  {
    id: 1,
    title: "Explore",
    genre: "Action",
    platform: "pc",
  },
  {
    id: 2,
    title: "Explore",
    genre: "Action",
    platform: "pc",
  },
  {
    id: 3,
    title: "Explore",
    genre: "Action",
    platform: "pc",
  },
];

const Explore = () => {
  return (
    <Box flex={1} w="100%">
      <NameSection name="Explore" path="/games" />
      <Box w="100%" flex={1}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <ExploreCard item={item} key={item.id} />;
          }}
        />
      </Box>
    </Box>
  );
};

export default Explore;
