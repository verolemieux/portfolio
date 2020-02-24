import React, { Component } from 'react';
import './App.css';
import SideBar from './pages/sidebar';
import AboutMe from './pages/about';
import Education from './pages/education';
import Work from './pages/work';
import Projects from './pages/projects';

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="sidebar">
          <SideBar></SideBar>
        </div>
        <div className="main">
          <AboutMe></AboutMe>
          <Education></Education>
          <Work></Work>
          <Projects></Projects>
        </div>
      </div>
    )
  }
}

export default App;
