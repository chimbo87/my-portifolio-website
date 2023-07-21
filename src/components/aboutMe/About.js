import React from "react";
import "./About.css";
import aboutImg from "../../assets/about.jpg";
import reviewImg from "../../assets/review.jpg";
import profileImg from "../../assets/Ellipse 15.png";

function About() {
  return (
    <>
      <div className="container-fluid" id="aboutPage">
        <div className="container" id="aboutHome">
          <h1>Front end Engineer</h1>
          {/* <p>
            Lorem ipsum dolor sit amet. Qui ipsa deleniti in fuga voluptatum et
            possimus sint eum nulla debitis! Est Quis incidunt sed aliquid
            inventore quo velit rerum qui nesciunt pariatur id doloremque natus
            ea ipsam sunt. Aut ducimus assumenda non debitis ratione hic
          </p> */}
          <div className="aboutIcons">
            <i class="fab fa-github"></i>
           
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-whatsapp"></i>
          </div>
        </div>
      </div>
      <div className="container" id="aboutWrap">
        
        <div class="row">
          <div class="col-12 col-lg-6 col-md-4 col-sm-4 " id="aboutCard">
          <h2>About me</h2>
            <p>
              Lorem ipsum dolor sit amet. Qui ipsa deleniti in fuga voluptatum
              et possimus sint eum nulla debitis! Est Quis incidunt sed aliquid
              inventore quo velit rerum qui nesciunt pariatur id doloremque
              natus ea ipsam sunt. Aut ducimus assumenda non debitis ratione hic
              pariatur tempora At excepturi nesciunt ut aliquam possimus eum
              commodi earum qui voluptas minima. Hic ipsum dolore est quibusdam
              repudiandae quo nulla obcaecati aut dolores debitis. Non laborum
              necessitatibus et alias necessitatibus ut officia neque et
              repudiandae dolores? Rem quam illo qui quia ullam aut natus
              ducimus qui porro enim id dicta reprehenderit aut quos illo sed
              saepe earum?
            </p>

            <p>
              Lorem ipsum dolor sit amet. Qui ipsa deleniti in fuga voluptatum
              et possimus sint eum nulla debitis! Est Quis incidunt sed aliquid
              inventore quo velit rerum qui nesciunt pariatur id doloremque
              natus ea ipsam sunt. Aut ducimus assumenda non debitis ratione hic
              pariatur tempora At excepturi nesciunt ut aliquam possimus eum
              commodi earum qui voluptas minima. Hic ipsum dolore est quibusdam
              repudiandae quo nulla obcaecati aut dolores debitis. Non laborum
              necessitatibus et alias necessitatibus ut officia neque et
              repudiandae dolores? Rem quam illo qui quia ullam aut natus
              ducimus qui porro enim id dicta reprehenderit aut quos illo sed
              saepe earum?
            </p>
            <p>
              Lorem ipsum dolor sit amet. Qui ipsa deleniti in fuga voluptatum
              et possimus sint eum nulla debitis! Est Quis incidunt sed aliquid
              inventore quo velit rerum qui nesciunt pariatur id doloremque
              natus ea ipsam sunt. Aut ducimus assumenda non debitis ratione hic
              pariatur tempora At excepturi nesciunt ut aliquam possimus eum
              commodi earum qui voluptas minima. Hic ipsum dolore est quibusdam
              repudiandae quo nulla obcaecati aut dolores debitis. 
            </p>
          </div>
          <div class="col-12 col-lg-6 col-md-4 col-sm-4" id="aboutCard">
            <img src={aboutImg} />
          </div>
        </div>
      </div>
      <div className="container" id="mission">
        <h2>What i do</h2>
        <div class="row">
          <div class="col-12 col-lg-4 col-md-6 col-sm-4" id="missionCard">
            <div id="missionInnerCard">
              <div id="innerCard">
                <i class="fas fa-laptop-code"></i>
              </div>
              <h4>Developing</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                varius felis at leo varius, sit amet sagittis
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-6 col-sm-4" id="missionCard">
            <div id="missionInnerCard">
              <div id="innerCard">
                <i class="fas fa-tools"></i>
              </div>
              <h4>API Integrations</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                varius felis at leo varius, sit amet sagittis
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-6 col-sm-4" id="missionCard">
            <div id="missionInnerCard">
              <div id="innerCard">
                <i class="fas fa-paint-brush"></i>
              </div>
              <h4>Designing</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                varius felis at leo varius, sit amet sagittis
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-4 col-md-6 col-sm-4" id="missionCard">
            <div id="missionInnerCard">
              <div id="innerCard">
                <i class="fas fa-drafting-compass"></i>
              </div>
              <h4>We are Freindly</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                varius felis at leo varius, sit amet sagittis
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-6 col-sm-4" id="missionCard">
            <div id="missionInnerCard">
              <div id="innerCard">
                <i class="fas fa-drafting-compass"></i>
              </div>
              <h4>We are Freindly</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                varius felis at leo varius, sit amet sagittis
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-6 col-sm-4" id="missionCard">
            <div id="missionInnerCard">
              <div id="innerCard">
                <i class="fas fa-drafting-compass"></i>
              </div>
              <h4>We are Freindly</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                varius felis at leo varius, sit amet sagittis
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
        className="container"

      >
        <h2>What they say</h2>
        <div class="carousel-inner">
          <div class="carousel-item active" id="imgHomeBox">
            <img src={reviewImg} class="d-block w-100" alt="..." id="imgHome" />
            <div class="carousel-caption  d-md-block" id="homeTextBox">
              <div id="reviewCard">
                <img src={profileImg} />
                <h5>Mr T Smith</h5>
                <p>
                  <i class="fa fa-quote-left"></i>Lorem ipsum dolor sit amet.
                  Qui ipsa deleniti in fuga voluptatum et possimus sint eum
                  nulla debitis! Est Quis incidunt sed aliquid inventore quo
                  velit rerum qui nesciunt pariatur id doloremque natus ea ipsam
                  sunt. Aut ducimus assumenda non debitis ratione hic pariatur
                  tempora At excepturi nesciunt ut aliquam possimus eum commodi
                  earum qui voluptas minima. Hic ipsum dolore est quibusdam
                  repudiandae quo nulla<i class="fa fa-quote-right"></i>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item" id="imgHomeBox">
            <img src={reviewImg} class="d-block w-100" alt="..." id="imgHome" />
            <div class="carousel-caption  d-md-block" id="homeTextBox">
              <div id="reviewCard">
                <img src={profileImg} />
                <h5>Mr T Smith</h5>
                <p>
                  <i class="fa fa-quote-left"></i>Lorem ipsum dolor sit amet.
                  Qui ipsa deleniti in fuga voluptatum et possimus sint eum
                  nulla debitis! Est Quis incidunt sed aliquid inventore quo
                  velit rerum qui nesciunt pariatur id doloremque natus ea ipsam
                  sunt. Aut ducimus assumenda non debitis ratione hic pariatur
                  tempora At excepturi nesciunt ut aliquam possimus eum commodi
                  earum qui voluptas minima. Hic ipsum dolore est quibusdam
                  repudiandae quo nulla<i class="fa fa-quote-right"></i>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item" id="imgHomeBox">
            <img src={reviewImg} class="d-block w-100" alt="..." id="imgHome" />
            <div class="carousel-caption d-md-block" id="homeTextBox">
              <div id="reviewCard">
                <img src={profileImg} />
                <h5>Mr T Smith</h5>
                <p>
                  <i class="fa fa-quote-left"></i>Lorem ipsum dolor sit amet.
                  Qui ipsa deleniti in fuga voluptatum et possimus sint eum
                  nulla debitis! Est Quis incidunt sed aliquid inventore quo
                  velit rerum qui nesciunt pariatur id doloremque natus ea ipsam
                  sunt. Aut ducimus assumenda non debitis ratione hic pariatur
                  tempora At excepturi nesciunt ut aliquam possimus eum commodi
                  earum qui voluptas minima. Hic ipsum dolore est quibusdam
                  repudiandae quo nulla<i class="fa fa-quote-right"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          // data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          // data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default About;
