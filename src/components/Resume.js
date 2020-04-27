import React from "react";

const resume = function () {
  window.open(
    "https://res.cloudinary.com/dolrvzlkq/image/upload/v1588028995/Portfolio/Resume_-_PM_SE_odd0l4.pdf",
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
        src="https://res.cloudinary.com/dolrvzlkq/image/upload/v1588028995/Portfolio/Resume_-_PM_SE_odd0l4.pdf"
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
