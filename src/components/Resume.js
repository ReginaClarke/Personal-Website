import React from "react";

const resume = function () {
  window.open(
    "https://res.cloudinary.com/dolrvzlkq/image/upload/v1587571377/Portfolio/Resume-Regina_Clarke_dgqtns.pdf",
    "_blank"
  );
};

function Resume() {
  return (
    <div className="resumeimage">
     
      <iframe
        title="Resume"
        className="resume"
        src="https://res.cloudinary.com/dolrvzlkq/image/upload/v1587571377/Portfolio/Resume-Regina_Clarke_dgqtns.pdf#zoom=FitW"
        alt="resume"
      />
      <div>
      <button className="gettoknowme" onClick={resume}>
          Additional Way to Download
      </button>
      </div>
    </div>
  );
}

export default Resume;
