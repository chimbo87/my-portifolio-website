import React from "react";
import "./Blog.css";
import project02 from "../assets/project02.jpeg";
import project03 from "../assets/project03.jpeg";
import coffeeCode from "../assets/coffee&code.jpeg";
import Footer from "../footer/Footer";
function Blog() {
  return (
    <>
    <div className="container-fluid" id="blogSectionBox">
      <h4>Blogs</h4>
    </div>
    <div className="container" id="blogContainer">
      <div class="row" id="blogWrap">
        <div class="col-lg-6 md-4" id="blogImg">
          <img src={coffeeCode} />
        </div>

        <div class="col-lg-6 md-4" id="blogsText">
          <h5>I have started a new project using React and Node</h5>
          <p>
            The is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
          </p>
          <div id="blogViews">
            <div id="blogLinks">
              <div id="blogIcons">
                <i class="bx bx-like"></i>
                <small>201</small>
              </div>
              <div id="blogIcons">
                <i class="bx bx-share-alt"></i>
                <small>8</small>
              </div>
              <div id="blogIcons">
                <i class="bx bx-comment"></i>
                <small>25</small>
              </div>
            </div>
            <div>
              <small>
                <i>06 Jan 2023</i>
              </small>
            </div>
          </div>
        </div>

        
      </div>
      <div class="row" id="blogWrap">
        <div class="col-lg-6 md-4" id="blogImg">
          <img src={project02} />
        </div>

        <div class="col-lg-6 md-4" id="blogsText">
          <h5>I have started a new project using React and Node</h5>
          <p>
            The is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
          </p>
          <div id="blogViews">
            <div id="blogLinks">
              <div id="blogIcons">
                <i class="bx bx-like"></i>
                <small>201</small>
              </div>
              <div id="blogIcons">
                <i class="bx bx-share-alt"></i>
                <small>8</small>
              </div>
              <div id="blogIcons">
                <i class="bx bx-comment"></i>
                <small>25</small>
              </div>
            </div>
            <div>
              <small>
                <i>06 Jan 2023</i>
              </small>
            </div>
          </div>
        </div>

        
      </div>
      <div class="row" id="blogWrap">
        <div class="col-lg-6 md-4" id="blogImg">
          <img src={project03} />
        </div>

        <div class="col-lg-6 md-4" id="blogsText">
          <h5>I have started a new project using React and Node</h5>
          <p>
            The is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
          </p>
          <div id="blogViews">
            <div id="blogLinks">
              <div id="blogIcons">
                <i class="bx bx-like"></i>
                <small>201</small>
              </div>
              <div id="blogIcons">
                <i class="bx bx-share-alt"></i>
                <small>8</small>
              </div>
              <div id="blogIcons">
                <i class="bx bx-comment"></i>
                <small>25</small>
              </div>
            </div>
            <div>
              <small>
                <i>06 Jan 2023</i>
              </small>
            </div>
          </div>
        </div>

        
      </div>
    </div>
    <div id="projectPagination">
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item active" aria-current="page">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
        </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}

export default Blog;
