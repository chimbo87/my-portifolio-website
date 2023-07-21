import React from "react";
import homeImg from "../assets/home.jpg";
import "./Home.css";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  return (
    <>
    
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" id="homeBox">
            <img src={homeImg} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-block d-md-block" id="homeTexts">
            <h5>Hi There, Iam</h5>
              <h2>Archford Nhanga</h2>
              <h5>Frontend Software Engineer</h5>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur,
              </p>
              <div>
                <button  onClick={() => { navigate("/projects") }}>My Work</button>
              </div>
            </div>
          </div>
          <div class="carousel-item" id="homeBox">
            <img src={homeImg} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-block d-md-block" id="homeTexts">
              <h5>Hi There, Iam</h5>
              <h2>Archford Nhanga</h2>
              <h5>Frontend Software Engineer</h5>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur,
              </p>
              <div>
                <button>My Work</button>
              </div>
            </div>
          </div>
          <div class="carousel-item" id="homeBox">
            <img src={homeImg} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block" id="homeTexts">
            <h5>Hi There, Iam</h5>
              <h2>Archford Nhanga</h2>
              <h5>Frontend Software Engineer</h5>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur,
              </p>
              <div>
                <button>My Work</button>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Home;
