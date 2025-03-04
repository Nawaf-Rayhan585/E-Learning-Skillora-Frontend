import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Development.css'
import { Link } from "react-router-dom";

const Design = () => {
  return (
    <div>
      <Navbar />
      <br /><br /><br /><br /><br /><br /><br/>
      <Link to='/' className="button-back">Go Back <i class="bi bi-box-arrow-left"></i></Link>
      <section class="articles">
        <article>
          <div class="article-wrapper">
            <figure>
              <img src="https://cdn.ostad.app/course/cover/2024-12-19T15-52-04.170Z-Course%20Thumbnail%2013%20(1).jpg" alt="" />
            </figure>
            <div class="article-body">
              <h2 className="course-name-course">Complete UI/UX Course</h2>
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
              <img src="https://cdn.ostad.app/course/cover/2025-02-05T07-53-04.891Z-UIUX2thumb-copy.jpg" alt="" />
            </figure>
            <div class="article-body">
              <h2 className="course-name-course">UX LeaderShips : Strategy and tactics</h2>
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

export default Design;
