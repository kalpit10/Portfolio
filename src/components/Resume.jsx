import React from "react";
import { useNavigate } from "react-router-dom";
import resume from "../resources/Resume.pdf";
import "../App.css";

function Resume(props) {
  const navigate = useNavigate();
  return (
    <div className={`header ${props.darkMode ? "dark-app" : ""}`}>
      <button
        onClick={() => navigate("/")}
        type="button"
        className="btn btn-outline-primary m-3"
      >
        Back
      </button>

      <div id="resumepage" style={{ height: "900px" }}>
        <iframe
          className="m-3"
          src={resume}
          width="90%"
          height={"750px"}
          frameBorder="0"
          title="resume"
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
