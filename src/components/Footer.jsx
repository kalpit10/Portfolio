import React from "react";
import { Icon } from "@iconify/react";
import "../Stylesheet/Footer.css";

const currentYear = new Date().getFullYear();

const Footer = (props) => {
  return (
    <footer
      className={`bg-primary text-light text-center py-4 ${
        props.darkMode ? "dark-app" : ""
      } `}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Connect with Me!</h4>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center p-2">
            <a
              href="https://www.linkedin.com/in/kalpitswami/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="il:linkedin"
                height="2em"
                width="2em"
                className={`mx-4 ${props.darkMode ? "dark-icon" : "light-icon"}`}
              />
            </a>
            <a
              href="https://github.com/kalpit10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="devicon:github"
                height="2em"
                width="2em"
                className={`mx-4 ${props.darkMode ? "dark-icon" : "light-icon"}`}
              />
            </a>
            <a href="mailto:kalpit.swami@gmail.com">
              <Icon
                icon="mdi:email"
                height="2em"
                width="2em"
                className={`mx-4 ${props.darkMode ? "dark-icon" : "light-icon"}`}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p>&copy; {currentYear} Kalpit Swami</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
