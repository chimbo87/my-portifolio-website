import React from "react";
import "./About.css";
import aboutImg from "../assets/avat.jpg";
import avata2 from "../assets/avata2.jpeg";
import aboutSection from "../assets/avat.jpg";
import avata3 from "../assets/fromntend.mp4";
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
          <h4>About Me</h4>
        </div>
      </div>

      <div className="container" id="aboutMe">
        <div id="profileImgBox">
          <div class="row" id="profileImg">
            <div class="col-lg-4 md-4" id="profileTextImg">
              <img src={aboutSection} />
            </div>

            <div class="col-lg-8 md-4" id="profileText">
              <h5>Frontend Software Developer | Aws Solution Architecture </h5>
              <small>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </small>
              <div id="aboutIcons">
                <i class="bx bxl-github"></i>
                <i class="bx bx-envelope"></i>
                <i class="bx bxl-linkedin"></i>
              </div>
            </div>
          </div>

          <div class="row" id="aboutMeProfile">
            <div class="col-lg-6 md-4" id="aboutMeText">
              <p>
                It all began in the days of childhood, where I found myself
                engrossed in video games, sharing laughter and competition with
                friends. Little did I know that these gaming sessions were the
                spark that ignited my lifelong passion for all things tech. Born
                and raised in Zimbabwe, I embarked on my educational journey
                right here, fueled by an insatiable thirst for knowledge. I've
                always been drawn to the incredible ways in which technology can
                seamlessly interact with us and solve complex problems. My
                fascination extends to the ever-evolving world of technology,
                where I eagerly explore the frontiers of innovation. One hot
                topic that keeps me captivated is the enchanting realm of
                Artificial Intelligence, where machines learn, adapt, and
                astonish us with their capabilities.
              </p>

              <p>
                But life isn't just about screens and algorithms. In my spare
                moments, you'll find me cherishing time with family and friends,
                creating beautiful memories that light up my world. I'm an avid
                traveler, always ready to embrace new adventures and immerse
                myself in diverse cultures. And when it's time to unwind and
                challenge the mind in a different way, you'll often catch me
                playing a game of pool with friends.
              </p>
            </div>
            <div class="col-lg-6 md-4" id="aboutMeImg">
              <video src={avata3} autoPlay loop muted id="menuVideo" />
              <div id="videoBtn">
                {/* <button type="button" class="btn btn-primary" >
  Launch demo modal
</button> */}
                <i
                  class="bx bx-play-circle"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                ></i>
              </div>
            </div>
          </div>
        </div>

        <div className="container" id="aboutSkills">
          <h4>Experience</h4>
          <div class="row">
            <div class="col-lg-4 md-4" id="aboutTxtBox">
              <div id="aboutSkillTexts">
                <i class="bx bx-code-alt"></i>
                <h5>DESIGNING</h5>
                <p>
                  Design is at the heart of my work, blending aesthetics with
                  usability to create engaging user experiences. Beautifully
                  designed interfaces leave a lasting impression and enhance
                  user satisfaction.
                </p>
              </div>
            </div>
            <div class="col-lg-4 md-4" id="aboutTxtBox">
              <div id="aboutSkillTexts">
                <i class="bx bx-terminal"></i>
                <h5>API INTERGRATION</h5>
                <p>
                  I excel at integrating APIs to enhance functionality and
                  connect applications with external services.Seamless API
                  integration is key to expanding the capabilities of modern web
                  applications.
                </p>
              </div>
            </div>
            <div class="col-lg-4 md-4" id="aboutTxtBox">
              <div id="aboutSkillTexts">
                <i class="bx bx-bar-chart-alt"></i>
                <h5>DEBUGGING</h5>
                <p>
                  I specialize in meticulous debugging, uncovering and
                  resolving issues to ensure seamless functionality.My keen eye
                  for detail allows me to diagnose and fix even the trickiest of
                  bugs.
                </p>
              </div>
            </div>
            <div class="col-lg-4 md-4" id="aboutTxtBox">
              <div id="aboutSkillTexts">
                <i class="bx bx-paper-plane"></i>
                <h5>TESTING</h5>
                <p>
                  I'm passionate about testing to guarantee robust and
                  error-free software. Comprehensive testing ensures
                  reliability, security, and a smooth user experience.
                </p>
              </div>
            </div>
            <div class="col-lg-4 md-4" id="aboutTxtBox">
              <div id="aboutSkillTexts">
                <i class="bx bx-task"></i>
                <h5>MAINTANING</h5>
                <p>
                  I'm committed to ongoing maintenance, ensuring that
                  applications stay performant and up-to-date. Regular
                  maintenance keeps software healthy and adaptable to changing
                  requirements.
                </p>
              </div>
            </div>
            <div class="col-lg-4 md-4" id="aboutTxtBox">
              <div id="aboutSkillTexts">
                <i class="bx bxs-network-chart"></i>
                <h5>CODING</h5>
                <p>
                  Coding is my craft, and I take pride in writing clean,
                  efficient, and maintainable code. From frontend to backend,
                  I thrive on turning ideas into functional, elegant solutions
                  through code.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container" id="moreExperience">
          <h4>Aws Solution Architecture</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum'{" "}
          </p>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Cloud Techinical Essentials
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Migrating to Aws
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Solution Architecturing
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" id="reviewSection">
          <h4>Reviews</h4>
          <Slider {...settings}>
            <div id="reviewCard">
              <div id="reviewCardBox">
                <div id="reviewImageBox">
                  <img src={avata2} />
                </div>

                <span>
                  <i class="bx bxs-quote-alt-left"></i>
                </span>
                <p>
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated
                </p>
                <small id="reviewCardName">John Doe</small>
              </div>
            </div>
            <div id="reviewCard">
              <div id="reviewCardBox">
                <div id="reviewImageBox">
                  <img src={avata2} />
                </div>
                <span>
                  <i class="bx bxs-quote-alt-left"></i>
                </span>
                <p>
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated
                </p>
                <small id="reviewCardName">John Doe</small>
              </div>
            </div>
            <div id="reviewCard">
              <div id="reviewCardBox">
                <div id="reviewImageBox">
                  <img src={avata2} />
                </div>
                <span>
                  <i class="bx bxs-quote-alt-left"></i>
                </span>
                <p>
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated
                </p>
                <small id="reviewCardName">John Doe</small>
              </div>
            </div>
            <div id="reviewCard">
              <div id="reviewCardBox">
                <div id="reviewImageBox">
                  <img src={avata2} />
                </div>
                <span>
                  <i class="bx bxs-quote-alt-left"></i>
                </span>
                <p>
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated
                </p>
                <small id="reviewCardName">John Doe</small>
              </div>
            </div>
            <div id="reviewCard">
              <div id="reviewCardBox">
                <div id="reviewImageBox">
                  <img src={avata2} />
                </div>
                <span>
                  <i class="bx bxs-quote-alt-left"></i>
                </span>
                <p>
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated
                </p>
                <small id="reviewCardName">John Doe</small>
              </div>
            </div>

            <div id="reviewCard">
              <div id="reviewCardBox">
                <div id="reviewImageBox">
                  <img src={avata2} />
                </div>
                <span>
                  <i class="bx bxs-quote-alt-left"></i>
                </span>
                <p>
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated
                </p>
                <small id="reviewCardName">John Doe</small>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" id="modalVideoBox">
              <div id="modalVideo">
                {" "}
                <video src={avata3} autoPlay loop muted id="menuVideo" />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default About;
