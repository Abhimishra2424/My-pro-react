import React from "react";
import './Content.css'

const imgs = {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "5px",
  border: "1px #aaaaaa solid",
  boxShadow: "5px 5px 5px #aaaaaa",
}

function Content() {
  return (
    <>
      <section className="content">
        <div className="skills">
          <h1>Languages and Technologies</h1>
          <ul>
            <li>
              <strong>Proficient: </strong> JavaScript, React, Node.js, Express,
              MongoDB, HTML5, CSS3, Git, VS Code,
            </li>
          </ul>
        </div>
      </section>
      <section className="content">
    <div className="projects">
      <h1 className="a2">Projects</h1>
      <div className="project">
        <h2>Project #1: Full-Functional ECommerce Website</h2>
        {/* <img  src="art-compressed.jpg" alt="project 1" /> */}
        <ul>
          <li>
            A side project to create an ecommerce website like amazon that
            connects to Paypal.
          </li>
          <li>
            Learned SPA development using MERN stack.
          </li>
          <li>
            Challenges include connecting to paypal and user authentication
            using JsonWebToken.
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section className="content">
    <div className="educations">
      <h1 className="a3">Education</h1>
      <div className="education">
        <h2>Mumbai  University, kes shroff college</h2>
        <ul>
          <li className="li-1">
            Bachelor of Science in Information Technology
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section className="content">
    <div className="contact">
      <h1 className="a4">Contact Me</h1>
      <p>
        Feel free to contact me if you are interested in hiring me.
      </p>
      <ul>
        <li>
          <strong>EMail: </strong>
          <a href="mailto:abmishra700@gmail.com"
            >abmishra700@gmail.com </a>
        </li>
        <li>
          <strong>Twitter: </strong
          ><a href="https://twitter.com/Abhishekm2024">twitter.com/Abhsiehkm2024</a>
        </li>
        <li>
          <strong>GitHub: </strong
          ><a href="https://github.com/Abhimishra2424">github.com/Abhimishra2424</a>
        </li>
      </ul>
    </div>
  </section>
    </>
  );
}

export default Content;
