import React from "react";
import './About.css'

function About() {
  return (
    <>
      <section id="about" className="content">
        <div className="about">
          <h1 className="a1">About Me</h1>
          <p>
            I am a web developer who focuses on writing clean, elegant and
            efficient code.
          </p>
          <p>
            In my latest project I developed a fully-functional ecommerce
            website like Amazon. I designed it using{" "}
            <strong>HTML5 & CSS3</strong>, implemented frontend by{" "}
            <strong>React & Redux</strong> and built backend using{" "}
            <strong>Node & MongoDB</strong>.
          </p>
          <div className="resume">
            <a className="button" href="Resume.pdf">
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
