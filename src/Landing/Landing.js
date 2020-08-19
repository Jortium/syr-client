import React, { Component } from 'react';
import './Landing.css';

const Landing = () => {
return(
    <div className="landingPage">
        <div className="landingText">
    <h1 >Share Your Rig</h1>
    <p>Welcome to a social media site where you share your gaming PC! Post here and you can share elsewhere as well. It's lacking in areas but Rome wasn't 
        built in a day! So go ahead and post now and bookmark to watch the site grow.
    </p>
    <div>
        <p className="landingContact"><i className="fas fa-hand-spock"></i> By Joshua Ortiz</p>
        <p>"Change is the essential process of all existence.”</p>
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
    </div>
    </div>
    
)
}

export default Landing