import React from "react";
import {Navbar, Footer} from "../../components";
import {
  Hero,
  AboutUs,
  PopularDestinations,
  PopularFoods,
  Testimonials,
  Review,
} from "../../sections";

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
