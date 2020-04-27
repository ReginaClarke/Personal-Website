import React from "react";
import Headshot from "../assets/images/Headshot.png";

function About() {
  return (
    <div className="homepage">
      <img className="headshot" src={Headshot} alt="headshot" />

      <p className="aboutMe">
        I'm a software engineer focused on roles in product management and
        technical roles that allow for creativity. My passion is strategy and
        problem solving by fully leveraging good communication skills. I dig
        into the details when needed and create strategies to maintain and grow
        businesses based on my insight.
        <br />
        <br />
        I’ve managed areas of businesses worth over $100 million. I’ve turned
        would be exit businesses into company initiatives while also training
        others to do the same based on the application of strategic thinking.
        <br />
        <br />I am the type of person who continues learning, who reaches out
        for collaboration, who is always looking for ways to bring wins to the
        companies, and who loves driving results by being clear with product
        vision.
      </p>
    </div>
  );
}

export default About;
