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
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur,
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
        <small><span>&copy;</span> Designed and Build by Chimbo 2023</small>
      </div>
    </div>
  );
}

export default Footer;
