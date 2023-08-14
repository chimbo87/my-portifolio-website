import React from "react";
import homeImg from "../assets/home.jpg";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid"id="homeSection">
        <div className="container" id="homeContainerTextBox">
          <div id="textBoxWrap">
            <h5>Hi There, Iam</h5>
            <h2>ARCHFORD NHANGA</h2>
            <h5>Frontend Software Engineer</h5>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur,
            </p>
            <div>
              <button
                onClick={() => {
                  navigate("/projects");
                }}
              >
                My Work
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
