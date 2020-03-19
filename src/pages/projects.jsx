import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class Projects extends Component {
    render() {
      return (
        <div id="projects">
          <section data-section="projects">
            <h1>Projects</h1>
            <h4>CAPSTONE PROJECT</h4>
            <Button variant="light"><a href="" target="_blank" rel="noopener noreferrer">View Application</a></Button>
            <Button className="second" variant="light"><a href="https://github.com/Sharpmanjt/capstone" target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
            <ul>
              <li>Team Members</li>
                <p>Jeremy Thibeau, Sergio Lombana, Ian Miranda, Saad Khan</p>
              <li><a href="../../capstone_project_vision.pdf" target="_blank" rel="noopener noreferrer">Project Vision</a></li>
                <p>To design and develop a <b>Logistics Management System</b> aiming to streamline logistical processes and to provide a high-level overview of purchases and transfers
                for <b><a href="http://www.copierexports.com/" target="_blank" rel="noopener noreferrer">Shiva Exports Ltd</a></b>. The system will package different tools to help employees 
                with their daily challenges, such as importing assets, planning efficient routes and optimizing truck loads.</p>
              <li><a href="../../capstone_high_level_requirements.pdf" target="_blank" rel="noopener noreferrer">Project Business Requirements</a></li>
                <ul>
                  <li className="sub">Import assets and track their status</li>
                  <li className="sub">Plan routes for pickups and deliveries</li>
                  <li className="sub">Create truck lists for routes</li>
                  <li className="sub">View assets and routes in map overview</li>
                </ul>
                <p></p>
              <li><a href="../../capstone_project_plan.pdf" target="_blank" rel="noopener noreferrer">Project Plan</a></li>
                <ul>
                  <li className="sub"><b>Documentation Phase:</b> September 24 - December 14, 2019</li>
                  <li className="sub"><b>Development Phase:</b> January 6 - March 8, 2020</li>
                  <li className="sub"><b>Testing Phase:</b> March 8 - March 17, 2020</li>
                </ul>
                <p></p>
              <li><a href="../../capstone_requirements_analysis_design.pdf" target="_blank" rel="noopener noreferrer">Requirements Analysis & Design</a></li>
                <ul>
                  <li className="sub">Add and edit assets</li>
                  <li className="sub">Add and edit vendors and asset locations</li>
                  <li className="sub">Add and edit route stops</li>
                  <li className="sub">Add assets for pickup and delivery at stops</li>
                  <li className="sub">View placement of assets in truck container lists</li>
                </ul>
                <p></p>
              <li><a href="../../capstone_wireframes.pdf" target="_blank" rel="noopener noreferrer">Wireframes</a></li>
                <div>
                  <div className="imgContainer">
                      <img src="../../wireframe_1.PNG" height="290"/>
                      <p>Home Page</p>
                  </div>
                  <div className="imgContainer">
                      <img src="../../wireframe_2.PNG" height="290"/>
                      <p>Asset List Page</p>
                  </div>
                  <div className="imgContainer">
                      <img src="../../wireframe_3.PNG" height="290"/>
                      <p>Asset Form Page</p>
                  </div>
                </div>
                <div>
                  <div className="imgContainer">
                      <img src="../../wireframe_4.PNG" height="290"/>
                      <p>Route List Page</p>
                  </div>
                  <div className="imgContainer">
                      <img src="../../wireframe_5.PNG" height="290"/>
                      <p>Route Form Page</p>
                  </div>
                  <div className="imgContainer">
                      <img src="../../wireframe_6.PNG" height="290"/>
                      <p>Truck List Page</p>
                  </div>
                </div>
              <li>Status Reports</li>
                <ul>
                  <li className="sub"><a href="../../capstone_status_report_1.pdf" target="_blank" rel="noopener noreferrer"><b>Status Report I</b></a></li>
                  <p>Created database script, implemented basic components of most UI pages, established routing between pages</p>
                  <li className="sub"><a href="../../capstone_status_report_2.pdf" target="_blank" rel="noopener noreferrer"><b>Status Report II</b></a></li>
                  <p>Updated UI pages, developed CRUD operations for assets, implemented login process using JWT tokens, created map component using Open Street Maps API</p>
                  <li className="sub"><a href="../../capstone_status_report_3.pdf" target="_blank" rel="noopener noreferrer"><b>Status Report III</b></a></li>
                  <p>Finalized UI pages, developed CRUD operations for routes, finished map component with overlay, implemented logs</p>
                </ul>
                <p></p>
              <li>System Implementations</li>
                <ul>
                  <li className="sub"><a href="../../capstone_system_implementation_1.pdf" target="_blank" rel="noopener noreferrer">System Implementation I</a></li>
                  <li className="sub"><a href="" target="_blank" rel="noopener noreferrer">System Implementation II</a></li>                   
                </ul>
            </ul>
            <br></br>
            <h4>FULL STACK DEVELOPMENT</h4>
            <ul>
              <li>Gamer Lobby Application</li>
                <p>Single page application developed using MEAN (MongoDB, Express, Angular, Node.js) Stack, with an Angular Material Design user interface</p>
                <Button variant="light"><a href="https://vast-fortress-86013.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Application</a></Button>
                <Button className="second" variant="light"><a href="https://github.com/Sharpmanjt/gamer_lobby" target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
              <li>Chat Room Application</li>
                <p>Single page application developed using MERN (MongoDB, Express, React, Node.js) Stack, with a Material Design user interface</p>
                {/* <Button variant="light"><a href="" target="_blank" rel="noopener noreferrer">View Application</a></Button> */}
                <Button className="second" variant="light"><a href="https://github.com/Sharpmanjt/fullstack" target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
            </ul>
            <br></br>
            <h4>WEB APPLICATION DEVELOPMENT</h4>
            <ul>
              <li>Financial Application</li>
                <p>Secure login and registration processes developed using Java servlets</p>
                <Button variant="light"><a href="https://github.com/verolemieux/comp3095-assignment" target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
              <li>Incident Report Management Application</li>
                <p>Secure login and registration processes developed using ASP.NET, providing functions to three distinct types of users</p>
                <Button variant="light"><a href="https://github.com/verolemieux/techknowpro" target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
            </ul>
            <br></br>
            <h4>MOBILE APP DEVELOPMENT</h4>
            <ul>
              <li>Backpack Buddy</li>
                <p>Daily packing assistant developed for Android phones, allowing users to add items by scanning associated QR codes</p>
                <Button variant="light"><a href="https://github.com/verolemieux/comp3074-project" target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
              <li>StudyLife</li>
                <p>Academic planner developed for iOS phones, allowing users to add courses and related tasks, and be reminded of deadlines </p>
                <Button variant="light"><a href="https://github.com/verolemieux/comp3097-project" target="_blank" rel="noopener noreferrer">GitHub Repo</a></Button>
            </ul>
          </section>
        </div>
      )
    }
  }