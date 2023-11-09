import React from "react";
import "../Stylesheet/Projects.css";
import { Icon } from "@iconify/react";
import resumaidLogo from "../images/logodiv1.jpeg";
import "../App.css";

function Projects(props) {
  return (
    <div className={`p-3 header ${props.darkMode ? "dark-app" : ""}`}>
      <h1 className="fw-bold mt-4 text-center my-6 mx-auto dark-project-h1">Projects</h1>
      <div className="container py-5">
        <div className="row justify-content-center">
          {/* For medium-sized screens (laptops) and larger */}
          <div className="col-md-6 mb-3">
            {/* Your project card 1 goes here */}
            <div className="card border-0">
              <img
                src="https://cdn.dotpe.in/longtail/store-logo/6896975/8kgvRvdM.jpeg"
                className="card-img-top images"
                alt="Fresh Meals"
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  <a href="https://freshmeals-project.web.app/">Fresh Meals</a>
                </h5>
                <p className="card-text">
                  Experience seamless food ordering with our React-based web app
                  powered by Firebase. Select delicious items from the
                  restaurant menu, easily manage your cart, and view the total
                  order cost. Upon submission, provide your address and pincode,
                  and let Firebase efficiently handle and store your orders for
                  a hassle-free dining experience.
                </p>
                <div className="text-center">
                  <a
                    href="https://github.com/kalpit10/FreshMeals"
                    className="fs-2"
                  >
                    <Icon className="m-4 mx-auto" icon="devicon:github" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            {/* Your project card 2 goes here */}
            <div className="card border-0">
              <img
                src={resumaidLogo}
                className="card-img-top images"
                alt="Fresh Meals"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Resumaid</h5>
                <p className="card-text">
                  Resumaid: Craft your ideal resume effortlessly! Design
                  stunning CVs from scratch or choose from our stylish
                  templates. Utilize the ATS scanner to upload your text-based
                  resume for a comprehensive analysis and actionable feedback.
                  Elevate your job application game with Resumaid.
                </p>
                <div className="text-center">
                  <a
                    href="https://github.com/kalpit10/RESUMAID../tree/main"
                    className="fs-2"
                  >
                    <Icon className="m-4 mx-auto" icon="devicon:github" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
