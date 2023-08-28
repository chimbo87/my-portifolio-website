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
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem{" "}
            </p>
            <p>
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free{" "}
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
