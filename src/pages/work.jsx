import React, { Component } from 'react'

export default class Work extends Component {
    render() {
      return (
        <div id="work">
          <section data-section="work">
            <h1>Work</h1>
            <h4><a href="https://www.jonahgroup.com/">THE JONAH GROUP LTD</a></h4>
            <ul>
                <li>Internship - May 2019 to Aug 2019</li>
                <p><ul>
                  <li class="sub"><b>Project:</b><i> Lychee</i> (In-House Time and Project Management Software)</li>
                  <li class="sub"><b>Technologies:</b> React, .NET, SQL</li>
                  <li class="sub"><b>Tasks:</b> Implement new features, fix bugs</li>
                </ul></p>
                <li>Part-Time - Sep 2019 to Apr 2020</li>
                <p><ul>
                  <li class="sub"><b>Project:</b> Website Maintenance + <i>Lychee</i></li>
                  <li class="sub"><b>Technologies:</b> React, .NET, SQL</li>
                  <li class="sub"><b>Tasks:</b> Implement new features, fix bugs, update website content</li>
                </ul></p>
                <li>Full-Time - Starting May 2020</li>
                <p><ul>
                  <li class="sub">TBD</li>
                </ul></p>
            </ul>
          </section>
        </div>
      )
    }
  }