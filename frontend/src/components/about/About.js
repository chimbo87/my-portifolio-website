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
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making
              </p>

              <p>
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable.
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
                <i class="bx bx-task"></i>
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
                <i class="bx bxs-network-chart"></i>
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
