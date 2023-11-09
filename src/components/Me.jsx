import React, { useState, useEffect } from "react";
import "../Stylesheet/Me.css";
import "../App.css";

function Me(props) {
  // ----------------------TYPING-EFFECT-----------------------------
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const typingSpeed = 10; // Adjust the typing speed as needed

  const fullText =
    "A tech enthusiast on a journey to explore the world of web development. My experience includes projects like 'Resumaid,' where I crafted user-friendly solutions. I'm proficient in JavaScript, React.js, and more. Beyond coding, I'm captivated by AI/ML, enjoy immersive video games, and am passionate about sports.";

  useEffect(() => {
    const container = document.querySelector(".typing-container");
    if (!container) return; // Check if the container exists

    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText((prevText) => prevText + fullText[index]);
        setIndex(index + 1);
        container.scrollTop = container.scrollHeight; // Scroll to the bottom
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [index]);
  // ----------------------TYPING-EFFECT-----------------------------

  return (
    <div className={`header ${props.darkMode ? "dark-app" : ""}`}>
      <div className="row align-items-center">
        <div className="col-12 col-md-4 col-md-6 mx-auto">
          <div className="card d-none d-md-block">
            <div className="card-body text-center">
              <img
                src="https://media.licdn.com/dms/image/C4D03AQEVTqEhu-rYNA/profile-displayphoto-shrink_800_800/0/1658581544043?e=1704326400&v=beta&t=jtXV9Iy9EI-oR1x4-rF8hP2huyTcNkwCFRY_Lx2Rn2Y"
                className="card-img-top rounded-circle mx-auto"
                style={{ maxWidth: "150px" }}
                alt="Kalpit Swami"
              />
              <h5 className="card-title">I'm Kalpit Swami</h5>
              <p className="card-text typing-container">{text}</p>
            </div>
          </div>
          {/* Hide the card for screens smaller than md */}
          <div className="d-md-none text-center without-card">
            <img
              src="https://media.licdn.com/dms/image/C4D03AQEVTqEhu-rYNA/profile-displayphoto-shrink_800_800/0/1658581544043?e=1704326400&v=beta&t=jtXV9Iy9EI-oR1x4-rF8hP2huyTcNkwCFRY_Lx2Rn2Y"
              className="rounded-circle mx-auto"
              style={{ maxWidth: "150px" }}
              alt="Kalpit Swami"
            />
            <h5 className="card-title">I'm Kalpit Swami</h5>
            <p className="card-text typing-container">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Me;
