import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="container" id="contactSection">
      <div class="row">
        <div class="col-lg-8 md-4" id="contactText">
            <h4><span>GET IN </span>TOUCH</h4>
          <form>
            <div class="mb-3" id="contactInput">
              <label for="exampleFormControlInput1" class="form-label">
                {/* Full Name */}
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Full Name"
              />
            </div>
            <div class="mb-3" id="contactInput">
              <label for="exampleFormControlInput1" class="form-label">
                {/* Full Name */}
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Phone Number"
              />
            </div>
            <div class="mb-3" id="contactInput">
              <label for="exampleFormControlInput1" class="form-label">
                {/* Email address */}
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email Address"
              />
            </div>
            <div class="mb-3" id="contactInput">
              <label for="exampleFormControlTextarea1" class="form-label">
                {/* Type your message */}
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <div id="contactBtn">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
        <div class="col-lg-4 md-4">
          <div id="contactInfo">
            <i class="bx bx-phone"><p>+2781 733 8886<br/>+2781 733 8886</p></i>
            <i class="bx bx-location-plus"><p>Sandton Johannesburg<br/>Gauteng ,South Africa</p></i>
            <i class="bx bx-envelope"><p>archfordnhanga@gmail.com<br/>archychimbo@gmail.com</p></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
