import React, { Component } from 'react'

export default class AboutMe extends Component {
    render() {
      return (
        <div id="aboutMe">
          <section data-section="aboutMe">
            <h1>About Me</h1>
            <h4>BIOGRAPHY</h4>
            <p>I'm a motivated, enthusiastic, and passionate computer programing student at George Brown College, graduating this June. I'm also a part-time technical developer at The Jonah Group Ltd. I am experienced in C#, Java, React, Angular, SQL as well as JavaScript, HTML, and CSS.</p>
            <p>When I'm not writing code, I love to paint, draw, practice calligraphy, and decorate my apartment.</p>
            <br></br>
            <h4>PHILOSOPHY</h4>
            <p><i>“You'll never know everything about anything, especially something you love.”</i> ― Julia Child</p>
            <p>One of the reasons I am so fond of the IT industry is it's constantly changing and evolving nature. With new technologies and trends appearing every day, it is crucial to evolve rapidly. As a self-learner, I thrive on the endless learning opportunities.</p>
            <p>Through constant professional and personal development, I will strive to become a knowledgeable and talented developer, specializing in web applications.</p>
          </section>
          <div className="img-container-pages">
            <img className="logo-divider" src="../../succulent-logo-divider-edited.png"></img>
          </div>
        </div>
      )
    }
  }