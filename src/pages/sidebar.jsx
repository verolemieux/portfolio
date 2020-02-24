import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="sidebar-component">
          {/* <nav href="#navbar" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav> */}
          <aside>
            <div>
              {/* <div style={{backgroundImage: 'url(images/about.jpg)'}} /> */}
              <img className="profile-pic" src="../../profile_pic.png" alt="My Profile Photo"></img>
              <h1>Veronyque Lemieux</h1>
              <p className="email">veronyque.lemieux@gmail.com</p>
            </div>
            <div>
              <p className="documents"><a href="../../resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a> | <a href="" target="_blank" rel="noopener noreferrer">Cover Letter</a></p>
            </div>
            <div>
              <ul>
                <li><a href="#aboutMe" data-nav-section="home">About Me</a></li>
                <li><a href="#education" data-nav-section="education">Education</a></li>
                <li><a href="#work" data-nav-section="work">Work</a></li>
                <li><a href="#projects" data-nav-section="projects">Projects</a></li>
              </ul>
            </div>
            <div>
              <p className="social-media"><a href="https://www.linkedin.com/in/veronyque-lemieux" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/verolemieux" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
};