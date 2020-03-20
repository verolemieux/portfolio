import React, { Component } from 'react';

export default class Work extends Component {
    render() {
      return (
        <div id="work">
          <section data-section="work">
            <h1>Work</h1>
            <h4><a href="https://www.jonahgroup.com/">THE JONAH GROUP LTD</a></h4>
            <ul>
                <li>Internship - May 2019 to Aug 2019</li>
                <ul>
                  <li className="sub"><b>Project:</b><i> Lychee</i> (In-House Time and Project Management Software)</li>
                  <li className="sub"><b>Technologies:</b> React, .NET, SQL</li>
                  <li className="sub"><b>Tasks:</b> Implementing new features; Fixing bugs</li>
                </ul>
                <p></p>
                <li>Part-Time - Sep 2019 to Apr 2020</li>
                <ul>
                  <li className="sub"><b>Project:</b> Website Maintenance + <i>Lychee</i></li>
                  <li className="sub"><b>Technologies:</b> React, .NET, SQL</li>
                  <li className="sub"><b>Tasks:</b> Implementing new features; Fixed bugs; Updating website content</li>
                </ul>
                <p></p>
                <li>Full-Time - Starting May 2020</li>
                <ul>
                  <li className="sub">TBD</li>
                </ul>
            </ul>
          </section>
        </div>
      )
    }
  }