import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class Projects extends Component {
    render() {
      return (
        <div id="projects">
          <section data-section="projects">
            <h1>Projects</h1>
            <h4>CAPSTONE PROJECT</h4>
            <ul>
                <li><a href="../../capstone_project_vision.pdf" target="_blank" rel="noopener noreferrer">Project Vision</a></li>
                  <p>To design and develop a <b>Logistics Management System</b> aiming to streamline logistical processes and to provide a high-level overview of purchases and transfers
                  for <b><a href="http://www.copierexports.com/" target="_blank" rel="noopener noreferrer">Shiva Exports Ltd</a></b>. The system will package different tools to help employees 
                  with their daily challenges, such as importing assets, planning efficient routes and optimizing truck loads.</p>
                <li><a href="../../capstone_high_level_requirements.pdf" target="_blank" rel="noopener noreferrer">Project Business Requirements</a></li>
                  <p></p>
                <li><a href="../../capstone_project_plan.pdf" target="_blank" rel="noopener noreferrer">Project Plan</a></li>
                  <p><ul>
                    <li class="sub"><b>Documentation Phase:</b> September 24 - December 14, 2019</li>
                    <li class="sub"><b>Development Phase:</b> January 6 - March 8, 2020</li>
                    <li class="sub"><b>Testing Phase:</b> March 8 - March 17, 2020</li>
                  </ul></p>
                <li><a href="../../capstone_requirements_analysis_design.pdf" target="_blank" rel="noopener noreferrer">Requirements Analysis & Design</a></li>
                  <p></p>
                <li><a href="../../capstone_wireframes.pdf" target="_blank" rel="noopener noreferrer">Wireframes</a></li>
                  <div>
                    <div class="imgContainer">
                        <img src="../../wireframe_1.PNG" height="290"/>
                        <p>Home Page</p>
                    </div>
                    <div class="imgContainer">
                        <img src="../../wireframe_2.PNG" height="290"/>
                        <p>Asset List Page</p>
                    </div>
                    <div class="imgContainer">
                        <img src="../../wireframe_3.PNG" height="290"/>
                        <p>Asset Form Page</p>
                    </div>
                  </div>
                  <div>
                    <div class="imgContainer">
                        <img src="../../wireframe_4.PNG" height="290"/>
                        <p>Route List Page</p>
                    </div>
                    <div class="imgContainer">
                        <img src="../../wireframe_5.PNG" height="290"/>
                        <p>Route Form Page</p>
                    </div>
                    <div class="imgContainer">
                        <img src="../../wireframe_6.PNG" height="290"/>
                        <p>Truck List Page</p>
                    </div>
                  </div>
                <li>Status Reports</li>
                  <p><ul>
                    <li class="sub"><a href="../../capstone_status_report_1.pdf" target="_blank" rel="noopener noreferrer">Status Report 1</a></li>
                    <li class="sub"><a href="../../capstone_status_report_2.pdf" target="_blank" rel="noopener noreferrer">Status Report 2</a></li>
                  </ul></p>
                <li><a href="" target="_blank" rel="noopener noreferrer">System Implementation</a></li>
                  <p></p>
            </ul>
            <h4>FULL STACK DEVELOPMENT</h4>
            <ul>
              <li>Gamer Lobby Application</li>
                <p>Single page application developed using MEAN (MongoDB, Express, Angular, Node.js) Stack. The user interface was implemented using Angular Material Design.</p>
                <Button variant="light"><a href="https://vast-fortress-86013.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Application</a></Button>
              {/* <li>Alien Invader Game</li>
              <p></p>
              <Button variant="light"><a href="" target="_blank" rel="noopener noreferrer">View Application</a></Button> */}
            </ul>
            <h4>WEB APPLICATION DEVELOPMENT</h4>
            <ul>
              <li>Financial Application</li>
                <p>Secure login and registration processes were developed for a Java web application using servlets.</p>
              <li>Incident Report Management Application</li>
                <p>Secure login and registration processes were developed for a C# web application using ASP.NET, providing functions to three distinct types of users.</p>
            </ul>
            {/* <h4>MOBILLE APP DEVELOPMENT</h4>
            <ul>
              <li></li>
            </ul> */}
          </section>
        </div>
      )
    }
  }