import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid" id="footerSection">
      <div className="container">
        <div class="row">
          <div class="col-lg-8 md-4" id="footerText">
            <h5>More Info</h5>
            <small>
              I believe in the power of technology to make the world a better
              place, and I'm dedicated to using my skills to bring innovative
              ideas to life. Whether it's building responsive websites,
              optimizing user interfaces, or creating seamless user experiences,
              I'm here to turn your vision into reality.
            </small>
          </div>
          <div class="col-lg-4 md-4" id="footerSocialLinks">
            <div id="footerLinkHead">
              <h5>Follow me:</h5>
            </div>
            <div id="footerLinkIcon">
              <i class="bx bxl-github"></i>
              <i class="bx bxl-linkedin"></i>
              <i class="bx bxl-facebook"></i>
              <i class="bx bxl-whatsapp"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="footerRightText">
        <small>
          <span>&copy;</span> Designed and Build by Chimbo 2023
        </small>
      </div>
    </div>
  );
}

export default Footer;
