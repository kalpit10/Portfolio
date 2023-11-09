import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Me from "./components/Me";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";

function App(props) {
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve dark mode preference from localStorage or use default value
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // Save the dark mode preference to localStorage
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  return (
    <div className={`App ${props.darkMode ? "dark-app" : ""}`}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Me darkMode={darkMode} />
                <Skills darkMode={darkMode} />
                <Projects darkMode={darkMode} />
                <Certifications darkMode={darkMode} />
                <Footer darkMode={darkMode} />
              </div>
            }
          />
          <Route path="/resumepage" element={<Resume darkMode={darkMode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
