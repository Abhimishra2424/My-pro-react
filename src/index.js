import React from 'react';
import ReactDOM from 'react-dom';
// import Particles from 'react-particles-js';
import Header from './Header'
import About from './About'
import Content from './Content'




ReactDOM.render(
  <React.StrictMode>
    {/* <Particles /> */}
    <Header />
    <About />
    <Content />


  </React.StrictMode>,
  document.getElementById('root')
);
