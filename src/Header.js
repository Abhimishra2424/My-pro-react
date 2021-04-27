import React from "react";
import './Header.css'


// import './main'


const links = "https://twitter.com/Abhishekm2024"
const links2 = "https://github.com/Abhimishra242"


const styles ={
  
    width: "100%" ,
    height: "100%",
    width: "100% !important",
    height: "100vh !important",
  }

  const particles = { 
    background: "#1a222c",
    display: "flex",
    verticalAlign: "bottom",
    width: "100%",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  }

  const canvas = {
    
        width: "100% !important",
        height: "100vh !important",
    
  }

function Header() {
  return (
    <>
     
      <div  style={particles} className="particles-js" >
        <div className="header">
          <img className="header-image" src="pic.jpg" alt="photo.jpg" />
          <h1>
            <span className="header-title">Abhishek Mishra</span>
            <span className="header-description">Web Developer</span>
          </h1>
          <div className="header-icons">
            <a href={links} target="_blank">
              <i className="icon fa fa-twitter"></i>
            </a>
            <a href={links2} target="_blank">
              <i className="icon fa fa-github-alt"></i>
            </a>
          </div>
        </div>
        <a className="down" href="#about" data-scroll="">
          <i className="icon fa fa-chevron-down"></i>
        </a>
        <canvas
          
          className=""
          width="2530"
          height="606"
          style={styles}
        ></canvas>
      </div>
    </>
  );
}

export default Header;
