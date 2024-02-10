import React from "react";
import Navbar from "./components/Navbar";
import { Hero, AboutUs } from "./sections";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
    </main>
  );
};

export default App;
