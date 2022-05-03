import React from "react";
import Footer from "../Footer/Footer";
import "./contactus.css";
import hi from "./food.jpg";

function ContactUs() {
  return (
    <div>
      <div className="contactpage">
        <div className="container">
          <div className="form-section">
            <h1 className="header-1">Contact Us</h1>
            <form>
              <div className="field">
                <label>Message: </label> <br />
                <textarea className="text" placeholder="Talk To Us"></textarea>
              </div>
              <div className="field">
                <label>Email: </label> <br />
                <input type="email" name="email" placeholder="Email" />
              </div>
              <button className="submit-button">Send Message</button>
            </form>
          </div>
          <div className="image">
            <img className="rest-food" src={hi} alt="food"></img>
          </div>
        </div>
      </div>
      <br></br>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
