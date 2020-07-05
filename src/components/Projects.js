import React from "react";
import InstashopPlaceholder from "../assets/images/InstashopPlaceholder.png";
import Initials from "../assets/images/Initials.jpg";

//------------------external links----------------------------//
const realSnapsSite = function () {
  window.open("https://www.realsnaps.com/", "_blank");
};

const realSnapCaseStudy = function () {
  window.open(
    "https://drive.google.com/file/d/1TyXtitwfixuvEtFsJBWEgRnSqtMWsrvR/view?usp=sharing",
    "_blank"
  );
};

const realSnapLiveReview = function () {
  window.open(
    "https://drive.google.com/file/d/18zZGzAVUzT8V9VZlR-77FdJ9ESw7Sdta/view?usp=sharing",
    "_blank"
  );
};
///////////////// INSTASHOP/////////////////

const instashopSite = function () {
  window.open("https://instashop.surge.sh/", "_blank");
};

const instashopGithub = function () {
  window.open("https://github.com/ReginaClarke/Instashop", "_blank");
};

const instashopWireframe = function () {
  window.open(
    "https://xd.adobe.com/view/e6f11c66-f2be-4eda-5b97-0910b2b4e9ac-90c0/grid",
    "_blank"
  );
};
///////////////// MY FLICKS/////////////////
const myflicksSite = function () {
  window.open("http://myfavflicks.surge.sh/", "_blank");
};

const myflicksGithub = function () {
  window.open("https://github.com/ReginaClarke/P3-Movie-Goer", "_blank");
};

const myflicksWireframe = function () {
  window.open(
    "https://xd.adobe.com/view/54ac27ba-5bad-4594-5827-c3d7b42a0573-229d/grid",
    "_blank"
  );
};

///////////////// THE FASHION GIFS ///////////////////
const fashiongifySite = function () {
  window.open("https://the-fashion-gif.netlify.app", "_blank");
};

const fashiongifyGithub = function () {
  window.open("https://github.com/ReginaClarke/The-Fashion-Giphy", "_blank");
};

// const fashiongifyWireframe = function () {
//   window.open("", "_blank");
// };
///////////////// THE RETAIL BOOTCAMP //////////////////
const bootcampSite = function () {
  window.open("https://theretailbootcamp.netlify.app/", "_blank");
};

const bootcampGithub = function () {
  window.open("https://github.com/ReginaClarke/The-Retail-Bootcamp", "_blank");
};

const bootcampWireframe = function () {
  window.open("https://marvelapp.com/8532493/screen/66010622", "_blank");
};

///////////////// THIS PORTFOLIO WEBSITE //////////////////
const portfolioSite = function () {
  window.open("https://reginaclarke.com", "_blank");
};

const portfolioGithub = function () {
  window.open("https://github.com/ReginaClarke/Personal-Website", "_blank");
};

// const portfolioWireframe = function () {
//   window.open("", "_blank");
// };
//------------------COMPONENT----------------------------//

function Projects() {
  return (
    <div className="projectview">
      <div className="projectgrid">
        <div className="projectcontainer">
          <h3>Real Snaps</h3>
          <p>Real Estate Photography</p>
          {/* <video> */}
          <iframe
            title="realsnaps"
            className="youtubevideo"
            src="https://www.youtube.com/embed/IorwPpQ-CYc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/* </video> */}
          <h3>Product Management + Execution</h3>
          <p>Zenfolio Platform (No Coding)</p>
          <p>
            A client who is a real estate photographer required a website revision. I created a roadmap of features to help
            him improve conversion, improve client satisfaction, and increase revenue streams. Actions taken were based on research on users and competitive analysis.
          </p>
          <button className="projectbutton" onClick={realSnapsSite}>
            Live Site
          </button>
          <button className="projectbutton" onClick={realSnapCaseStudy}>
            Roadmap
          </button>
          <button className="projectbutton" onClick={realSnapLiveReview}>
            Before
          </button>
        </div>

        <div className="projectcontainer">
          <h3>Instashop</h3>
          <p>Social Media Commerce for B2C</p>
          <video src="" poster={InstashopPlaceholder} preload="auto"></video>
          <h3>ROR and React Application</h3>
          <p>CSS, React.js, Ruby on Rails</p>
          <p>
            Search beautiful photos for inspiration and also have the ability to
            instantly buy anything seen in the photos. After all, digital
            shopping continues to rise as well as social media.
          </p>
          <button className="projectbutton" onClick={instashopSite}>
            Live Site
          </button>
          <button className="projectbutton" onClick={instashopGithub}>
            Code
          </button>
          <button className="projectbutton" onClick={instashopWireframe}>
            Wireframe
          </button>
        </div>

        <div className="projectcontainer">
          <h3>My Flicks</h3>
          <p>Movie Tracking</p>
          <video controls muted loop>
            <source
              src="https://res.cloudinary.com/dolrvzlkq/video/upload/v1587688179/Portfolio/MyFlicksVideo_xmszqa.mp4"
              type="video/mp4"
            />
          </video>
          <h3>MERN Application</h3>
          <p>MongoDB, Mongoose, Express, React.js, Node.js, & the OMDB API</p>
          <p>
            Ever forget the name of that amazing movie, you can now save them in
            an easy to use application.
          </p>
          <button className="projectbutton" onClick={myflicksSite}>
            Live Site
          </button>
          <button className="projectbutton" onClick={myflicksGithub}>
            Code
          </button>
          <button className="projectbutton" onClick={myflicksWireframe}>
            Wireframe
          </button>
        </div>

        <div className="projectcontainer">
          <h3>The Fashion GIFs</h3>
          <p>Fun with Fashion</p>
          <video
            src="https://res.cloudinary.com/dolrvzlkq/video/upload/v1587688905/Portfolio/FashionGifsVideo_rmtlwr.mp4"
            controls
            muted
            loop
          ></video>
          <h3>React.js Application</h3>
          <p>CSS & React.js</p>
          <p>
            A playful website that allows you to search GIFs related to fashion
            using the Giphy API.
          </p>
          <button className="projectbutton" onClick={fashiongifySite}>
            Live Site
          </button>
          <button className="projectbutton" onClick={fashiongifyGithub}>
            Code
          </button>
          {/* <button className="projectbutton" onClick={fashiongifyWireframe}>
            Wireframe
          </button> */}
        </div>

        <div className="projectcontainer">
          <h3>The Retail Bootcamp</h3>
          <p>Retail Business Fundamentals</p>
          <video
            src="https://res.cloudinary.com/dolrvzlkq/video/upload/v1587688945/Portfolio/RetailBootcampVideo_wcvtd0.mp4"
            controls
            muted
            loop
          ></video>
          <h3>Vanilla JavaScript Application</h3>
          <p>JavaScript, CSS, & HTML</p>
          <p>
            An informational website for small businesses. This allows users to
            search the last quarter profitability for established public
            retailers utilizing the Last 10k API.
          </p>
          <button className="projectbutton" onClick={bootcampSite}>
            Live Site
          </button>
          <button className="projectbutton" onClick={bootcampGithub}>
            Code
          </button>
          <button className="projectbutton" onClick={bootcampWireframe}>
            Wireframe
          </button>
        </div>

        <div className="projectcontainer">
          <h3>Regina Clarke</h3>
          <p>Portfolio Website</p>
          <video src="" poster={Initials}></video>
          <h3>React Application</h3>
          <p>React & CSS</p>
          <p>The current portfolio you are viewing</p>
          <button className="projectbutton" onClick={portfolioSite}>
            Live Site
          </button>
          <button className="projectbutton" onClick={portfolioGithub}>
            Code
          </button>
          {/* <button className="projectbutton" onClick={portfolioWireframe}>
            Wireframe
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
