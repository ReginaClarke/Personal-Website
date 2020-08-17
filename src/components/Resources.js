import React from "react";
import Headshot from "../assets/images/Headshot.png";
import Resume from "./Resume"

function Resources() {
  return (
    <div className="homepage">
      <img className="headshot" src={Headshot} alt="headshot" />

      <p className="aboutMe">
        I'm a problem solver who brings value to both customers and
        businesses. My passion is strategy and problem solving by fully
        leveraging good communication skills and understanding the business wholistically. I dig into the details when needed
        and create strategies to maintain and grow businesses based on my
        insight.
        <br />
        <br />
        My domain expertise is in retail. If you have a retail challenge
        especially in regards to tech, I can help!
        <br />
        <br />
        My strength in strategy is knowing just enough about many roles for a
        well rounded perspective, a good understanding of knowing the larger
        impact, and the insight to ensure the inclusion of key stakeholders.
        This is a key reason for my need to learn software engineering as I
        transition to the tech industry.
        <br />
        <br />
        I’ve managed areas of businesses worth over $100 million. I’ve turned
        would be exit businesses into company initiatives while also training
        others to do the same based on the application of strategic thinking.
        <br />
        <br />I am the type of person who continues learning, who reaches out
        for collaboration, who is always looking for ways to bring wins to
        companies, and who loves driving results by being clear with product
        vision.
      </p>
      <Resume/>
      <hr />
      <h3>Companies I've worked with or for include:</h3>
      <div className="logogrid">
      </div>
    </div>
  );
}

export default Resources;
