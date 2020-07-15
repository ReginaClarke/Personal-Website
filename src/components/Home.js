import React from "react";
// import Initials from "../assets/images/Initials.jpg";
import Headshot from "../assets/images/Headshot.png";
import Resume from "../components/Resume";

// const aboutme = function () {
//   window.open("/about", "_blank");
// };

function Home() {
  return (
    <div className="homepage">
      <img className="headshot" src={Headshot} alt="headshot" />

      {/* <img className="logo" src={Initials} alt="logo" /> */}
      <h3 className="typewriter">The problem solver solving the unsolvable.</h3>
      <hr />
      <Resume />
    </div>
  );
}

export default Home;
