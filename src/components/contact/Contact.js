import React from "react";
import './Contact.css';
function Contact() {
  return (
    <div className="container-fluid" id="contactBox">
      <div>
        <div class="row">
          <div class="col-12 col-lg-3" id="contactTxtWrap">
            <div className="contactTextBox">
              <h2>Contact Me</h2>
              <div className="contactTxtBoxIcon">
                <div id="contactIcon">
                  <img src="./Vector (3).png" alt="..." />
                  <p>
                    Johannesburg, Gauteng Province , South Africa.
                  </p>
                </div>
                <div id="contactIcon">
                  <img src="./Vector (4).png" alt="..." />
                  <p>
                    123 456 7890 <br />
                    123 456 7890
                  </p>
                </div>
                <div id="contactIcon">
                  <img src="./Vector (5).png" alt="..." />
                  <p>
                    abc@gmail.com
                    <br />
                    abc@gmail.com
                  </p>
                </div>
              </div>
              <div id="contactIconBox">
              <i class="fab fa-github"></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-linkedin"></i>
             
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-9" id="contactFormWrap">
            <div className="contactFormBox">
              <h2>Get in Touch</h2>
              <form>
                <div class="row g-3">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      aria-label="First name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Type your message
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <button type="button" class="btn btn-danger">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
