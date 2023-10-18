import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid" id="homeSection">
        <div className="container" id="homeContainerTextBox">
          <div id="textBoxWrap">
            <h3>Hi There, Iam</h3>
            <h2>ARCHFORD NHANGA </h2>
            <h3>Frontend Software Engineer | Aws Solution Architecture</h3>
            <p>
              I believe in the power of technology to make the world a better
              place, and I'm dedicated to using my skills to bring innovative
              ideas to life. Whether it's building responsive websites,
              optimizing user interfaces, or creating seamless user experiences,
              I'm here to turn your vision into reality.
            </p>

            <div id="homePortifolio">
              <button
                onClick={() => {
                  navigate("/projects");
                }}
              >
                View portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
