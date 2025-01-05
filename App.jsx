import React from "react";
import Navbar from "./component/Navbar/Navbar.jsx";
import Hero from "./component/Hero/Hero.jsx";
import HotDessert from "./component/HotDessert/HotDessert.jsx";

const App = () => {
  return (
    <div className="overflow-hidden bg-white2">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <HotDessert />
    </div>
  );
};

export default App;
