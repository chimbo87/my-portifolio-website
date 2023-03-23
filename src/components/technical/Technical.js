import React from "react";
import './Technical.css';

function Technical() {
  return (
    <div className="container-fluid">
      <div class="container" id="technicalBox">
        <h2>Technical Skills</h2>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4" id="technicalCard">
            <ul className="innerBox">
              <li>React.js</li>
              <li>Angular.js</li>
              <li>Vanila JavaScript</li>
              <li>Html</li>
              <li>Css</li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-4" id="technicalCard">
          <ul className="innerBox">
              <li>Node.js</li>
              <li>Next.js</li>
              <li>Boostrap</li>
              <li>Material Ui</li>
              <li>Styled components</li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-4" id="technicalCard">
          <ul className="innerBox">
              <li>Redux</li>
              <li>Firebase</li>
              <li>Mongo DB</li>
              <li>Git</li>
              <li>Bit-Bucket</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technical;
