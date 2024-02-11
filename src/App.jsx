import React from "react";
import Navbar from "./components/Navbar";
import {
  Hero,
  AboutUs,
  PopularDestinations,
  PopularFoods,
  Footer,
} from "./sections";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <PopularDestinations />
      <PopularFoods />
      <Footer />
    </main>
  );
};

export default App;
