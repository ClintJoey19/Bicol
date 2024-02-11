import React from "react";
import Navbar from "./components/Navbar";
import { Hero, AboutUs, PopularDestinations, PopularFoods } from "./sections";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <PopularDestinations />
      <PopularFoods />
    </main>
  );
};

export default App;
