import React from "react";
// import Initials from "../assets/images/Initials.jpg";
import Headshot from "../assets/images/Headshot.png";


// const aboutme = function () {
//   window.open("/about", "_blank");
// };


function Home() {
  return (
    <div className="homepage">
      <img className="headshot" src={Headshot} alt="headshot" />

      {/* <img className="logo" src={Initials} alt="logo" /> */}
      <h3 className="typewriter">
        A problem solver solving the unsolvable.
      </h3>
      {/* <button className="gettoknowme" onClick={aboutme}>
        Get to Know Me
      </button> */}
    </div>
  );
}

export default Home;
