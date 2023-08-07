import React from "react";
import "./About.css";
import aboutImg from "../assets/avat.jpg";
import avata2 from "../assets/avata2.jpeg";
import aboutSection from "../assets/aboutSection.jpg";
import avata3 from "../assets/avata3.jpeg";
import Slider from "react-slick";
import Footer from "../footer/Footer";

function About() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
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
        {/* <div id="aboutSectionImg">  <img src={aboutImg} /></div> */}
        <div id="aboutTexts">
          <h4>About Me</h4>
        </div>
        {/* <div id="aboutPara">
          <p>
            here are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or
          </p>
        </div> */}
        <div id="aboutIcons">
          <i class="bx bxl-github"></i>
          <i class="bx bxl-linkedin"></i>
          <i class="bx bxl-facebook"></i>
          <i class="bx bxl-whatsapp"></i>
        </div>
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
              slightly believable .
            </h5>
          </div>
          <div class="col-lg-6 md-4" id="aboutMeImg">
            <img src={aboutSection} />
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
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum'{" "}
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
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
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
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
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
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="reviewSection">
        <h4>Reviews</h4>
        <Slider {...settings}>
          <div id="reviewCard">
            <div id="reviewCardBox">
              <img src={avata2} />
              <span>
                <i class="bx bxs-quote-alt-left"></i>
              </span>
              <p>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated
              </p>
              <small id="reviewCardName">John Doe</small>
            </div>
          </div>
          <div id="reviewCard">
            <div id="reviewCardBox">
              <img src={avata2} />
              <span>
                <i class="bx bxs-quote-alt-left"></i>
              </span>
              <p>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated
              </p>
              <small id="reviewCardName">John Doe</small>
            </div>
          </div>
          <div id="reviewCard">
            <div id="reviewCardBox">
              <img src={avata2} />
              <span>
                <i class="bx bxs-quote-alt-left"></i>
              </span>
              <p>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated
              </p>
              <small id="reviewCardName">John Doe</small>
            </div>
          </div>
          <div id="reviewCard">
            <div id="reviewCardBox">
              <img src={avata2} />
              <span>
                <i class="bx bxs-quote-alt-left"></i>
              </span>
              <p>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated
              </p>
              <small id="reviewCardName">John Doe</small>
            </div>
          </div>
          <div id="reviewCard">
            <div id="reviewCardBox">
              <img src={avata2} />
              <span>
                <i class="bx bxs-quote-alt-left"></i>
              </span>
              <p>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated
              </p>
              <small id="reviewCardName">John Doe</small>
            </div>
          </div>

          <div id="reviewCard">
            <div id="reviewCardBox">
              <img src={avata2} />
              <span>
                <i class="bx bxs-quote-alt-left"></i>
              </span>
              <p>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated
              </p>
              <small id="reviewCardName">John Doe</small>
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
