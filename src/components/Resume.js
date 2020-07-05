import React from "react";

const resume = function () {
  window.open(
    "https://res.cloudinary.com/dolrvzlkq/image/upload/v1588088955/Portfolio/Resume-Regina_Clarke-Product_Manager_Software_Engineer_ky50ad.pdf",
    "_blank"
  );
};

function Resume() {
  return (
    <div className="resumeimage">
      {/* <iframe
        allowFullScreen
        title="Resume"
        scrolling="auto"
        type="application/pdf"
        className="resume"
        src="https://res.cloudinary.com/dolrvzlkq/image/upload/v1588088955/Portfolio/Resume-Regina_Clarke-Product_Manager_Software_Engineer_ky50ad.pdf"
        alt="resume"
      /> */}
      <div>
        <button className="gettoknowme resumebutton" onClick={resume}>
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Resume;
