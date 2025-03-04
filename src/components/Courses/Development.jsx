import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Development.css'
import { Link } from "react-router-dom";

const Development = () => {
  return (
    <div>
      <Navbar />
      <br /><br /><br /><br /><br /><br /><br/>
      <Link to='/' className="button-back">Go Back <i class="bi bi-box-arrow-left"></i></Link>
      <section class="articles">
        <article>
          <div class="article-wrapper">
            <figure>
              <img src="https://cdn.ostad.app/course/cover/2024-12-17T11-35-19.890Z-Course%20Thumbnail%2012.jpg" alt="" />
            </figure>
            <div class="article-body">
              <h2 className="course-name-course">Fullstack With MERN</h2>
              <p className="context">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem obcaecati quibusdam architecto aspernatur, placeat provident!
              </p>
                <div className="container-price-course">
                   <a href="#" class="enroll">Enroll Course</a>
                   <div className="price">99$</div>
                </div>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src="https://cdn.ostad.app/course/cover/2024-12-18T15-22-42.948Z-Flutter-Thumbnail.jpg" alt="" />
            </figure>
            <div class="article-body">
              <h2 className="course-name-course">App Development With Flutter</h2>
              <p className="context">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem obcaecati quibusdam architecto aspernatur, placeat provident!
              </p>
                <div className="container-price-course">
                   <a href="#" class="enroll">Enroll Course</a>
                   <div className="price">79$</div>
                </div>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default Development;
