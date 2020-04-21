import React from "react";
import Initials from "../assets/images/Initials.jpg";

function Home() {
  return (
    <div className="homepage">
      <img className=" logo" src={Initials} alt="logo" />
      <h3>
        I'm a full-stack software engineer with a love for strategy and
        creation.
      </h3>
    </div>
  );
}

export default Home;
