import React from "react";
import "./About.css";
import aboutImg from "../assets/avat.jpg";
import avata2 from "../assets/avata2.jpeg";
import avata3 from "../assets/avata3.jpeg";
import Slider from "react-slick";
import Footer from "../footer/Footer";

function About() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-fluid" id="aboutSection">
        <div id="aboutTexts">
          <h4>ABOUT ME</h4>
        </div>
        <div id="aboutPara">
          {" "}
          <p>
            here are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or
          </p>
        </div>
        <div id="aboutIcons">
          <i class="bx bxl-github"></i>
          <i class="bx bxl-linkedin"></i>
          <i class="bx bxl-facebook"></i>
          <i class="bx bxl-whatsapp"></i>
        </div>

        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#dedddd"
            fill-opacity="1"
            d="M0,288L34.3,272C68.6,256,137,224,206,218.7C274.3,213,343,235,411,240C480,245,549,235,617,202.7C685.7,171,754,117,823,101.3C891.4,85,960,107,1029,133.3C1097.1,160,1166,192,1234,186.7C1302.9,181,1371,139,1406,117.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          >
            <h3>hello world</h3>
          </path>
        </svg> */}
      </div>

      <div className="container" id="aboutMe">
        <div class="row">
          <div class="col-lg-6 md-4" id="aboutMeText">
            <h4>About Me</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
             
            </p>
           
            <p>
           
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable.
            </p>
            <h5>
            
           
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable
           
            .
          </h5>
          </div>
          <div class="col-lg-6 md-4" id="aboutMeImg">
            <img src={aboutImg} />
          </div>
        </div>
      </div>

      <div className="container" id="aboutSkills">
        <h4>What I Do</h4>
        <div class="row">
          <div class="col-lg-4 md-4" id="aboutTxtBox">
            <div id="aboutSkillTexts">
              <i class="bx bx-code-alt"></i>
              <h5>DESIGNING</h5>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which loo
              </p>
            </div>
          </div>
          <div class="col-lg-4 md-4" id="aboutTxtBox">
            <div id="aboutSkillTexts">
              <i class="bx bx-terminal"></i>
              <h5>API INTERGRATION</h5>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which loo
              </p>
            </div>
          </div>
          <div class="col-lg-4 md-4" id="aboutTxtBox">
            <div id="aboutSkillTexts">
              <i class="bx bx-bar-chart-alt"></i>
              <h5>DEBUGGING</h5>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which loo
              </p>
            </div>
          </div>
          <div class="col-lg-4 md-4" id="aboutTxtBox">
            <div id="aboutSkillTexts">
              <i class="bx bx-paper-plane"></i>
              <h5>TESTING</h5>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which loo
              </p>
            </div>
          </div>
          <div class="col-lg-4 md-4" id="aboutTxtBox">
            <div id="aboutSkillTexts">
            <i class='bx bx-task'></i>
              <h5>MAINTANING</h5>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which loo
              </p>
            </div>
          </div>
          <div class="col-lg-4 md-4" id="aboutTxtBox">
            <div id="aboutSkillTexts">
            <i class='bx bxs-network-chart'></i>
              <h5>CODING</h5>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which loo
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="reviewSection">
        <h4>Reviews</h4>
        <Slider {...settings}>
          <div id="reviewCard">
            <div id="reviewCardBox">
              <img src={avata3} />
              <p>
                <span>
                  <i class="bx bxs-quote-alt-left"></i>
                </span>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated
                <span>
                  <i class="bx bxs-quote-alt-right"></i>
                </span>
              </p>
              <small>John Doe</small>
            </div>
          </div>
          <div id="reviewCard">
            <div id="reviewCardBox">
              <img src={avata2} />
              <p>
                <span>
                  <i class="bx bxs-quote-alt-left"></i>
                </span>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated
                <span>
                  <i class="bx bxs-quote-alt-right"></i>
                </span>
              </p>
              <small>John Doe</small>
            </div>
          </div>
          <div id="reviewCard">
            <div id="reviewCardBox">
              <img src={avata3} />
              <p>
                <span>
                  <i class="bx bxs-quote-alt-left"></i>
                </span>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated
                <span>
                  <i class="bx bxs-quote-alt-right"></i>
                </span>
              </p>
              <small>John Doe</small>
            </div>
          </div>
          <div id="reviewCard">
            <div id="reviewCardBox">
              <img src={avata2} />
              <p>
                <span>
                  <i class="bx bxs-quote-alt-left"></i>
                </span>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated
                <span>
                  <i class="bx bxs-quote-alt-right"></i>
                </span>
              </p>
              <small>John Doe</small>
            </div>
          </div>
          <div id="reviewCard">
            <div id="reviewCardBox">
              <img src={avata3} />
              <p>
                <span>
                  <i class="bx bxs-quote-alt-left"></i>
                </span>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated
                <span>
                  <i class="bx bxs-quote-alt-right"></i>
                </span>
              </p>
              <small>John Doe</small>
            </div>
          </div>
          <div id="reviewCard">
            <div id="reviewCardBox">
              <img src={avata2} />
              <p>
                <span>
                  <i class="bx bxs-quote-alt-left"></i>
                </span>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated
                <span>
                  <i class="bx bxs-quote-alt-right"></i>
                </span>
              </p>
              <small>John Doe</small>
            </div>
          </div>
        </Slider>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default About;
