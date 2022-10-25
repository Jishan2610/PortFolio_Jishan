import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Contact.css";
import contactVector from "./../../assets/contact_anime.png";
import github from "./../../assets/gh.png";
import linkedin from "./../../assets/li.png";
import instagram from "./../../assets/in.png";
import medium from "./../../assets/me.png";
import web from "./../../assets/web.png";

const Contact = () => {
  let clr = {
    color: "#215abe",
  };
  return (
    <div className="section-container">
      <Header
        heading="Get in touch."
        details=" Feel free to get in touch by dropping me an email."
      />

      {/* Form section */}
      <div className="contact-form-container">
      
        <form className="contact-form" action="https://formspree.io/f/mdojwaaw"
  method="POST">
          <input
            type="email"
            placeholder="Your Email ID"
            name="email"
            className="input-box email-input"
            autoComplete="off"
          />

         
          <textarea
            type="text"
            placeholder="Type Your Message"
            name="message"
            className="input-box body-input"
          ></textarea>

          
          <button type="submit" className="contact-btn">
            Send Email
          </button>
        </form>
      </div>

      {/* Social icons */}
      <div className="social-icons-container">
        <a href="https://github.com/Jishan2610" className="social-icon">
          <img src={github} alt="social" />
        </a>
        <a
          href="https://www.linkedin.com/in/sk-jishan-ali-71062a1a3/"
          className="social-icon"
        >
          <img src={linkedin} alt="social" />
        </a>
        <a href="https://www.instagram.com/last_node/" className="social-icon">
          <img src={instagram} alt="social" />
        </a>
        <a
          href="https://www.facebook.com/jishanali.sk.9"
          className="social-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80px"
            height="60px"
            fill="currentColor"
            // fill={`${clr}`}
            class="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
          {/* <img src='https://www.seekpng.com/png/detail/919-9194757_facebook-transparent-background-facebook-small-logo.png' alt='social' className='fb-img'/> */}
        </a>
        {/* <a href="https://madhavbahl.tech" className="social-icon">
          <img src={web} alt="social" />
        </a> */}
      </div>

      <Footer phrase="Read more " toAdress="/about" link="about me." />

      <div className="vector-frame">
        <img src={contactVector} alt="vector" className="about-vector" />
      </div>
    </div>
  );
};

export default Contact;
