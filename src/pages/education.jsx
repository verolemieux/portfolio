import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class Education extends Component {
    render() {
      return (
        <div id="education">
          <section data-section="education">
            <h1>Education</h1>
                <h4><a href="https://www.georgebrown.ca/" target="_blank" rel="noopener noreferrer">GEORGE BROWN COLLEGE</a></h4>
                <ul>
                    <li><a href="https://www.georgebrown.ca/programs/computer-programmer-analyst-program-t127/" target="_blank" rel="noopener noreferrer">Computer Programmer Analyst, Advanced Diploma</a></li>
                        <p>Jan 2018 to Apr 2020</p>
                        <Button variant="light"><a href="../../gbc_academic_transcript.pdf" target="_blank" rel="noopener noreferrer">View Transcript</a></Button>
                </ul>
                <h4><a href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer">UNIVERSITY OF WATERLOO</a></h4>
                <ul>
                    <li><a href="https://uwaterloo.ca/science/undergraduate/programs/honours-science" target="_blank" rel="noopener noreferrer">Honours Science, Bachelor's Degree</a></li>
                        <p><i>Minor in Chemistry & Biology</i><br></br>Sep 2013 to Apr 2017</p>
                        <Button variant="light"><a href="../../uw_academic_transcript.pdf" target="_blank" rel="noopener noreferrer">View Transcript</a></Button>
                </ul>
          </section>
        </div>
      )
    }
  }