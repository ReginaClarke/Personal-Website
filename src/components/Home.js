import React from "react";
import Initials from "../assets/images/Initials.jpg";

const aboutme = function () {
  window.open("about", "_blank");
};

function Home() {
  return (
    <div>
      <img className="logo" src={Initials} alt="logo" />
      <h3 className="homepage">
        I'm a full-stack software engineer with a love for strategy and
        creation.
      </h3>
      <button className="gettoknowme" onClick={aboutme}>
        Get to Know Regina
      </button>
    </div>
  );
}

export default Home;

