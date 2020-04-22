import React from "react";
import MyFlicksVideo from "../assets/videos/MyFlicksVideo.webm";

//------------------external links----------------------------//
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

const fashiongifyWireframe = function () {
  window.open("", "_blank");
};
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

//------------------COMPONENT----------------------------//

function Projects() {
  return (
    <div className="projectview">
      <div className="projectgrid">
        <div className="projectcontainer">
          <h3>Instashop</h3>
          <video width="400" height="225" src="" controls></video>
          <h3>ROR and React Application</h3>
          <p>CSS, React.js, Ruby on Rails</p>
          <p>
            Search beautiful photos for inspiration and also have the ability to
            instantly buy anything seen in the photos.
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
          <video width="400" height="225" src={MyFlicksVideo} controls></video>
          <h3>MERN Application</h3>
          <p>MongoDB, Mongoose, Express, React.js, Node.js</p>
          <p>Save your favorite moves in an easy to use application.</p>
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
          <video width="400" height="225" src="" controls></video>
          <h3>React.js Application</h3>
          <p>CSS & React.js</p>
          <p>
            A playful website that allows you to search GIFs related to fashion.
          </p>
          <button className="projectbutton" onClick={fashiongifySite}>
            Live Site
          </button>
          <button className="projectbutton" onClick={fashiongifyGithub}>
            Code
          </button>
          <button className="projectbutton" onClick={fashiongifyWireframe}>
            Wireframe
          </button>
        </div>

        <div className="projectcontainer">
          <h3>The Retail Bootcamp</h3>
          <video width="400" height="225" src="" controls></video>
          <h3>Vanilla JavaScript Application</h3>
          <p>JavaScript, CSS, & HTML</p>
          <p>
            A business website for small business who sell consumer goods. This
            website is informational and allows users to search the last quarter
            profitability for established retailers that are public.
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
      </div>
    </div>
  );
}

export default Projects;
