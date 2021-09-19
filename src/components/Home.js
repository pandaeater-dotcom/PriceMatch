import React from "react";
import Banner from './Homepage/Banner';
import Navbar from './Homepage/Navbar';
import Features from './Homepage/Features';
import Team from './Homepage/Team';

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features />
      <Team />
    </div>
  );
}

export default Home;
