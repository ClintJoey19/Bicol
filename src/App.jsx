import React from "react";
import Navbar from "./components/Navbar";
import {
  Hero,
  AboutUs,
  PopularDestinations,
  PopularFoods,
  Testimonials,
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
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;
