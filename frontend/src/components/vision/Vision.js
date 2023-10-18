import React from "react";
import "./Vision.css";
import visionImg from "../assets/vision.jpg";
import { useNavigate } from "react-router-dom";
function Vision() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container" id="visionSection">
        <div class="row">
          <div class="col-lg-6 md-4" id="visionText">
            <h4>
              <span>VISI</span>ON
            </h4>
            <h5>
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly
            </h5>
            <p>
              In a rapidly evolving digital landscape, my vision is to be at the
              forefront of innovation and creativity. I aspire to create web
              experiences that not only meet but exceed user expectations,
              leaving a lasting impact.
            </p>
            <p>
              As an enthusiast of cloud computing, I'm not only shaping the
              frontend but also exploring the vast possibilities offered by
              cloud technologies. I believe in the power of cloud solutions to
              enhance scalability, security, and accessibility in our digital
              world. Currently, I'm on an exciting journey of continuous
              learning and self-improvement. I'm passionately studying the
              latest frontend frameworks, UI/UX principles, and cloud computing
              platforms to stay ahead of industry trends. My goal is to combine
              my frontend expertise with cloud capabilities to build dynamic and
              efficient web applications that drive innovation. My vision is to
              inspire, educate, and make a positive difference in the digital
              realm by crafting visually stunning, intuitive, and accessible
              websites that leave users delighted and businesses thriving. Join
              me on this exciting journey as we shape the future of the web, one
              pixel and one interaction at a time."
              <a
                href=""
                onClick={() => {
                  navigate("/about");
                }}
              >
                read more
              </a>
            </p>
          </div>
          <div class="col-lg-6 md-4" id="visionImage">
            <img
              src={visionImg}
              class="d-block w-100"
              alt="..."
              id="visionImg"
            />
            <div id="visionImgText">
              <h5>
                {" "}
                <span>
                  <i class="bx bxs-quote-alt-left"></i>
                </span>
                There are many variations of passages <br />
                of Lorem Ipsum available, but <br /> the majority have suffered{" "}
                <br /> alteration in some form
              </h5>
              <small>J Smith.</small>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="skillTec">
        <div class="row">
          <div class="col-lg-4 md-4" id="visionTecWrap">
            <div id="skillsTake">
              <h4>+2</h4>
              <h5> Years of Experience</h5>
            </div>
          </div>
          <div class="col-lg-4 md-4" id="visionTecWrap">
            <div id="skillsTake">
              <h4>+20</h4>
              <h5> Projects Completed</h5>
            </div>
          </div>
          <div class="col-lg-4 md-4" id="visionTecWrap">
            <div id="skillsTake">
              <h4>+15</h4>
              <h5> Technical Skills</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vision;
