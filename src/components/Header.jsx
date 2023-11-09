import React, { useEffect, useState, useMemo } from "react";
import "../App.css";
import "../Stylesheet/Header.css";
// import { Icon } from "@iconify/react";
import { Switch } from "antd";

function Header(props) {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // useMemo hook is used to calculate and store the array only once during the component's initialization.
  const sentences = useMemo(
    () => [
      "Welcome To Kalpit's Portfolio.",
      "Turning Lines of Code into Works of Art...",
      "I am a MERN Stack Developer",
    ],
    []
  );

  useEffect(() => {
    let sentenceIndex = 0;
    let charIndex = 0;
    let typeTextTimeout;
    let cursorBlinkTimeout;

    const typeText = () => {
      if (charIndex <= sentences[sentenceIndex].length) {
        setText(sentences[sentenceIndex].substring(0, charIndex));
        charIndex++;
        typeTextTimeout = setTimeout(typeText, 100); // Typing speed
      } else {
        charIndex = 0;
        sentenceIndex = (sentenceIndex + 1) % sentences.length; // Move to the next sentence, loop back to the first if at the end
        setTimeout(() => {
          typeTextTimeout = setTimeout(typeText, 1000); // Delay before typing the next sentence
        }, 1000); // Delay after typing a sentence
      }
    };

    const cursorBlink = () => {
      setShowCursor((prev) => !prev);
      cursorBlinkTimeout = setTimeout(cursorBlink, 500); // Cursor blinking interval
    };

    cursorBlinkTimeout = setTimeout(cursorBlink, 500); // Start cursor blinking
    typeTextTimeout = setTimeout(typeText, 1000); // Start typing

    return () => {
      // Cleanup
      clearTimeout(typeTextTimeout);
      clearTimeout(cursorBlinkTimeout);
    };
  }, [sentences]);

  return (
    <div className={`header hero-anime ${props.darkMode ? "dark-app" : ""}`}>
      <div className="">
        <ul className="navbar navbar-light justify-content-center bg-light start-header">
          <li className="nav-item">
            <a
              className="nav-link m-4 mx-5"
              aria-current="page"
              href="/"
            >
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link m-3 mx-5" href={"/resumepage"}>
              My Resume
            </a>
          </li>

          <li className="nav-item nav-link">
            <label className="m-3 mx-5">Dark Mode</label>
            <Switch onClick={props.toggleDarkMode} defaultChecked={props.darkMode}/>
          </li>
        </ul>
      </div>

      <div>
        <div className="full-height">
          <div className="absolute-center">
            <div className="section">
              <div className="container">
                <div className="row">
                  <div className="col-12 py-5">
                    <h1 className="dark-span-h1">
                      <span>{text}</span>
                      {showCursor && <span className="cursor">|</span>}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
