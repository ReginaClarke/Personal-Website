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
        type="application/pdf"
        width="100%"
        height="100%"
        className="resume"
        src="https://res.cloudinary.com/dolrvzlkq/image/upload/v1587571377/Portfolio/Resume-Regina_Clarke_dgqtns.pdf"
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
