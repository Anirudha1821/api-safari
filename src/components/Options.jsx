import React from 'react';
import './Options.css'; // Relative path to your external CSS file
import { Link } from 'react-router-dom';

const Options = () => {
  return (
    <div>
      <div id="content">
        <div className="container">
          <div className="flipper">
            <div className="front">
              <img
                src="https://i.postimg.cc/0j7fX4CK/pngtree-powerpoint-clipart-creator-concept-man-present-diagram-on-white-easel-vector-png-image-68155.png"
                alt="img"
              />
              <p className="caption">Creator</p>
            </div>
            <div className="back">
              <a href="/Login">
                <h1>Creator</h1>
              </a>
              <p className="description">
                A creator is someone who makes, invents, or produces something.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flipper">
            <div className="front">
              <img
                src="https://i.postimg.cc/j5cq6xpD/pngtree-web-development-concept-flat-design-png-image-2303316.jpg"
                alt="img"
              />
              <p className="caption">Model</p>
            </div>
            <div className="back">
              <a href="#">
                <h1>Model</h1>
              </a>
              <p className="description">
                A model structure is a network that exchanges information and is
                specific to a discipline.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flipper">
            <div className="front">
              <img
                src="https://i.postimg.cc/tg0gpmd4/3d-nft-icon-developer-male-illustration-629802-6.avif"
                alt="img"
              />
              <p className="caption">Web Designer</p>
            </div>
            <div className="back">
              <a href="#">
                <h1>Web Designer</h1>
              </a>
              <p className="description">
                A web designer creates the visual elements and layout of websites
                and web pages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
