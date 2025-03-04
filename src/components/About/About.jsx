import React from "react";
import './About.css'
import toast from 'react-hot-toast'
import {Link} from "react-router-dom"

const About = () => {

  const toastUnavailable = () => {

    toast('Sorry, This Video Is Unavailable', {
      position: 'top-right',
      autoClose: 5000,
      icon: '😓',
  });

  };

  return (
    <div class="responsive-container-block bigContainer">
      <div class="responsive-container-block Container bottomContainer">
        <div class="allText bottomText">
          <p class="text-blk subHeadingText">Why Choose Us, What We Provide.</p>
          <p class="text-blk description">
          <i class="bi bi-check2-all icon-about"></i> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quisquam at beatae aut sint libero.
          </p>
          <p class="text-blk description">
          <i class="bi bi-check2-all icon-about"></i> Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <p class="text-blk description">
          <i class="bi bi-check2-all icon-about"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, perspiciatis?
          </p>
          <a>
          <Link className="a" to="/about"><button class="btn-fill">View More</button></Link>
          </a>
        </div>
        <div class="videoContainer block" onClick={toastUnavailable}>
          <iframe
            onClick={toastUnavailable}
            allowfullscreen="allowfullscreen"
            class="mainVideo"
            controls="controls"
            src="https://www.youtube.com/embed/svg%3E?"
          ></iframe>
          <img
            class="dotsImg image-block"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;