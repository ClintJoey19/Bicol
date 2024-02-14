import React from "react";
import Navbar from "./components/Navbar";
import {
  Hero,
  AboutUs,
  PopularDestinations,
  PopularFoods,
  Testimonials,
  Review,
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
      <Review />
      <Footer />
    </main>
  );
};

export default App;
