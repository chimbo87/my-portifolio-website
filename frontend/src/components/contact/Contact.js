import React from "react";
import { useState } from "react";
import "./Contact.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendClick = () => {
    toast.success('Message sent successfully!', {
      position: 'top-right',
      autoClose: 3000, 
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    
    });
  };
const Loader =()=>{
  return(
    <div class="spinner-border text-secondary spinner-border-sm" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  )
}
  const submitRegHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("http://localhost:8000/feedback", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        number: number,
        email: email,
        message: message,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    console.log(result);
    setName("");
    setNumber("");
    setEmail("");
    setMessage("");
    handleSendClick();
    setLoading(false);
  };
  return (
    <div className="container" id="contactSection">
      <div class="row">
        <div class="col-lg-8 md-4" id="contactText">
          <h4>
            <span>GET IN </span>TOUCH
          </h4>
          <form onSubmit={submitRegHandler}>
            <div class="mb-3" id="contactInput">
              <label for="exampleFormControlInput1" class="form-label"></label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="mb-3" id="contactInput">
              <label for="exampleFormControlInput1" class="form-label"></label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div class="mb-3" id="contactInput">
              <label for="exampleFormControlInput1" class="form-label"></label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-3" id="contactInput">
              <label
                for="exampleFormControlTextarea1"
                class="form-label"
              ></label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div id="contactBtn">
            {!loading && (
              <span></span>
            )}
            <button type="submit"> {loading && <Loader/>}Send</button>
            </div>
          </form>
        </div>
        <div class="col-lg-4 md-4">
          <div id="contactInfo">
            <i class="bx bx-phone">
              <p>
                +2781 733 8886
                <br />
                +2781 733 8886
              </p>
            </i>
            <i class="bx bx-location-plus">
              <p>
                Sandton Johannesburg
                <br />
                Gauteng ,South Africa
              </p>
            </i>
            <i class="bx bx-envelope">
              <p>
                archfordnhanga@gmail.com
                <br />
                archychimbo@gmail.com
              </p>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
