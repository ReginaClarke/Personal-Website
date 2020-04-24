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
        allowFullScreen
        title="Resume"
        scrolling="auto"
        type="application/pdf"
        className="resume"
        src="https://res.cloudinary.com/dolrvzlkq/image/upload/v1587571377/Portfolio/Resume-Regina_Clarke_dgqtns.pdf#zoom=fitW"
        alt="resume"
      />
      <div>
        <button className="gettoknowme resumebutton" onClick={resume}>
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Resume;
