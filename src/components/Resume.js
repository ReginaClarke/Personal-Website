import React from "react";

const resume = function () {
  window.open(
    "https://res.cloudinary.com/dolrvzlkq/image/upload/v1588027400/Portfolio/Resume_-_Regina_Clarke_PM_SE_pjwaap.pdf",
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
        src="https://res.cloudinary.com/dolrvzlkq/image/upload/v1588027400/Portfolio/Resume_-_Regina_Clarke_PM_SE_pjwaap.pdf"
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
