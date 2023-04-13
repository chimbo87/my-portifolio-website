import React from "react";
import "./Project.css";
import reviewImg from "../../assets/review.jpg";
import project1 from "../../assets/project1.jpeg";
import project2 from "../../assets/project2.jpeg";

function Project() {
  return (
    <>
      <div className="container-fluid" id="projectSection">
      <div className="container" id="projectSearchBox">
      <div id="projectSelect">
        <span>Category</span>
          <select class="form-select" aria-label="Default select example">
            <option selected>All</option>
            <option value="1">One sgdgsy hysyuu</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="input-group mb-3" id="projectSearch">
          <input
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
          />
          <button>
           <i class="fa fa-search"></i>
          </button>
          
        </div>
        
      </div>
      </div>
      <div className="container">
      <div class="row">
        <div class="col-12 col-lg-4 col-md-4 col-sm-4" id="projectCards">
          <div id="projectInnerCards">
           <img src={project2} />
            <h5>JavaScript</h5>
             <h4>construction website</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
               elit, sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua.Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do</p>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-4 col-sm-4" id="projectCards">
          <div id="projectInnerCards">
           <img src={reviewImg} />
            <h5>JavaScript</h5>
             <h4>construction website</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
               elit, sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua.Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do</p>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-4 col-sm-4" id="projectCards">
          <div id="projectInnerCards">
           <img src={project1} />
            <h5>JavaScript</h5>
             <h4>construction website</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
               elit, sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua.Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
