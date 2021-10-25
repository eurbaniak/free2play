import React from "react";
import AppHeader from "./AppHeader";
import Favourite from "./Favourites";
import Explore from "./Explore";
import AppNavigation from "./AppNavigation";

const Home = () => {
  return (
    <>
      <AppHeader />
      <Favourite />
      <Explore />
      <AppNavigation />
    </>
  );
};
export default Home;
