import React from "react";
import "./Vision.css";
import visionImg from "../../assets/vision01.jpeg";

function Vision() {
  return (
    <>
      <div className="container" id="visionBox">
        <div class="row">
          <div class="col-12 col-lg-6 col-md-4 col-sm-3 " id="visionCard">
            <h2>Vision</h2>
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
          </div>
          <div class="col-12 col-lg-6 col-md-4 col-sm-3" id="visionCard">
            <img src={visionImg} />
          </div>
        </div>
      </div>
      <div className="container" id="boxVision">
        <div class="row">
          <div class="col-12 col-lg-4 col-md-4 col-sm-4" id="visionInnerCard">
          <div id="visionWrapCard">
          <i class="	fas fa-laptop-code"></i>
            <h2>2+</h2>
            <span></span>
            <p>Years of Experience</p>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-4 col-sm-4" id="visionInnerCard">
          <div id="visionWrapCard">
          <i class="	fas fa-briefcase"></i>
            <h2>20+</h2>
            <span></span>
            <p> Projects Built</p>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-4 col-sm-4"id="visionInnerCard">
          <div id="visionWrapCard">
          <i class="	fas fa-cogs"></i>
            <h2>15+</h2>
            <span></span>
            <p>Technical Skills</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Vision;
