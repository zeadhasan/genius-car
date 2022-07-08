import React from "react";
import Banner from "./Banner/Banner";
import Experts from "./Experts/Experts";
import Services from "./Services/Services";

function Home() {
  return (
    <section>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
    </section>
  );
}

export default Home;