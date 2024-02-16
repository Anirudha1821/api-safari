import React from 'react';
import './Profile.css'; // Relative path to your external CSS file
import profilePic from '../images/person.jpg';

const Profile = () => {
  return (
    <div id="algn">
      <div id="card">
        <div id="upper-bg">
          <img src={profilePic} alt="profile-pic" className="profile-pic" />
        </div>
        <div id="lower-bg">
          <div className="text">
            <p className="name">Mr. Anirudha Udgirkar</p>
            <p className="title">Web developer &amp; Competitive programmer</p>
          </div>
          <div id="icons">
            <a href="#" className="ico"><img width="48" height="48" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new"/></a>
            <a href="#" className="ico">
              <img width="48" height="48" src="https://img.icons8.com/fluency/48/github.png" alt="github"/>
            </a>
            <a href="#" className="ico">
              <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
            </a>
            <a href="#" className="ico">
              <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
            </a>
          </div>
          <div id="btn">
            <button className="msg">Subscribe</button>
            <button className="msg">Message</button>
          </div>
          <div id="l-c-s">
            <div className="num">
              <img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/facebook-like--v1.png" alt="facebook-like--v1"/>
              <span>35k</span>
            </div>
            <div className="num dvr"></div>
            <div className="num">
              <img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/speech-bubble--v1.png" alt="speech-bubble--v1"/>
              <span>20k</span>
            </div>
            <div className="num dvr"></div>
            <div className="num">
              <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/share.png" alt="share"/>
              <span>15k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
