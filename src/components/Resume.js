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
      {/* <button className="gettoknowme" onClick={resume}>
        download
      </button> */}

      <div></div>
      <iframe
        title="Resume"
        width="800px"
        height="1050px"
        src="https://res.cloudinary.com/dolrvzlkq/image/upload/v1587571377/Portfolio/Resume-Regina_Clarke_dgqtns.pdf"
        alt="resume"
      />
    </div>
  );
}

export default Resume;
