import React from 'react';
import Container from 'react-bootstrap/Container';
import BootstrapNav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Mynav.css'; // Relative path to your external CSS file


function Mynav() {
  return (
    <>
      <nav>
        <div id="portrait-frame">
          <img
            id="portrait"
            src="https://assets.codepen.io/10936164/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1700504404&width=512"
            alt=""
          />
          <h1 id="title" className="hf_text">
            Hello World!
          </h1>
        </div>
        <div id="nav-items">
          <input type="checkbox" id="nav-check" />
          <div className="nav-icon">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <ul className="nav-links">
            <li>
              <a id="nav-home" href="#home" className="nav_link">
                HOME
              </a>
            </li>
            <li>
              <a id="nav-work" href="#work" className="nav_link">
                WORK
              </a>
            </li>
            <li>
              <a id="nav-about" href="#about" className="nav_link">
                ABOUT
              </a>
            </li>
            <li>
              <a id="nav-connect" href="#connect" className="nav_link">
                CONNECT
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <div className="content-wrap">
        <section id="home"></section>
        <section id="work"></section>
        <section id="about"></section>
        <section id="connect"></section>
      </div> */}
    </>
  );
}

export default Mynav;
