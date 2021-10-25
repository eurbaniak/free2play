import { Box, FlatList } from "native-base";
import React from "react";
import ExploreCard from "./ExploreCard";
import NameSection from "./NameSection";

const data = [
  {
    title: "Explore",
    genre: "Action",
    platform: "pc",
  },
  {
    title: "Explore",
    genre: "Action",
    platform: "pc",
  },
  {
    title: "Explore",
    genre: "Action",
    platform: "pc",
  },
];

const Explore = () => {
  return (
    <Box flex={1} w="100%">
      <NameSection name="Explore" />
      <Box w="100%" flex={1}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <ExploreCard item={item} key={item.index} />;
          }}
        />
      </Box>
    </Box>
  );
};

export default Explore;
