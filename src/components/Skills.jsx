import React from "react";
import "../Stylesheet/Skills.css";
import JavaScriptIcon from "../images/JavaScript.jpg";
import ReactIcon from "../images/ReactIcon.png";
import NodeIcon from "../images/NodeIcon.png";
import MongoIcon from "../images/MongoIcon.png";
import "../App.css";

function Skills(props) {
  const skillSection = [
    {
      name: "JavaScript",
      image: JavaScriptIcon,
      alt: "JS Icon",
    },
    {
      name: "React.js",
      image: ReactIcon,
      alt: "React Icon",
    },
    {
      name: "Node.js",
      image: NodeIcon,
      alt: "Node Icon",
    },
    {
      name: "MongoDB",
      image: MongoIcon,
      alt: "Mongo Icon",
    },
    // ... (other skills)
  ];

  return (
    <div
      id="skills"
      className={` p-5 header ${props.darkMode ? "dark-app" : ""}`}
    >
      <h1 className="fw-bold mt-4 text-center my-6 mx-auto dark-skill">Skills</h1>
      <div className="container py-5 text-center">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center g-4">
          {skillSection.map((skill) => (
            <div className="col" key={skill.name}>
              <div className="card border-0 skill-card mx-auto pr-3">
                <div className="rounded-image">
                  <img
                    src={skill.image}
                    className="rounded-circle img-fluid"
                    alt={skill.alt}
                  />
                </div>
                <div className="card-body text-center">
                  <p className="fw-bold">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
