import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <ul class="contactList">
        <li>
          <a href="mailto:joshwortiz@gmail.com" target="_top">
            <img src="images/email.png" class="contactInfo" alt="Email Icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joshua-ortiz-188745184/"
            target="_blank"
          >
            <img
              src="images/linkedin.png"
              class="contactInfo"
              alt="LinkedIn Icon"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/OrtizJosh" target="_blank">
            <img
              src="images/github.png"
              class="contactInfo"
              alt="GitHub Icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;