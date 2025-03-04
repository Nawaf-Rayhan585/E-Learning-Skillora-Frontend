import React from 'react';
import './AllCourses.css'
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

const AllCourses = () => {
    return (
        <div>
                  <Navbar />
        <br /><br /><br /><br /><br /><br /><br/>
        <Link to='/' className="button-back">Go Back <i class="bi bi-box-arrow-left"></i></Link>
        <h1 className='title-popular'>All Courses</h1>
        <p className='popular-context'>All Courses In Our Website</p>

        <section class="articles">

          <article>
            <div class="article-wrapper">
              <figure>
                <img src="https://cdn.ostad.app/course/cover/2024-12-17T11-35-19.890Z-Course%20Thumbnail%2012.jpg" alt="" />
              </figure>
              <div class="article-body">
                <h2 className="course-name-course">Fullstack With MERN Course 2025</h2>
                <p className="context">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem obcaecati quibusdam architecto aspernatur, placeat provident!
                </p>
                  <div className="container-price-course">
                  <Link to='/enroll' class="enroll">Enroll Course</Link>
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
                <h2 className="course-name-course">App Development With Flutter Course 2025</h2>
                <p className="context">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem obcaecati quibusdam architecto aspernatur, placeat provident!
                </p>
                  <div className="container-price-course">
                  <Link to='/enroll' class="enroll">Enroll Course</Link>
                     <div className="price">79$</div>
                  </div>
              </div>
            </div>
          </article>
          <article>
          <div class="article-wrapper">
            <figure>
              <img src="https://cdn.ostad.app/course/cover/2024-12-19T15-55-32.073Z-Digital-Marketing.jpg" alt="" />
            </figure>
            <div class="article-body">
              <h2 className="course-name-course">Fullstack Digital Marketing Course in 2025</h2>
              <p className="context">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem obcaecati quibusdam architecto aspernatur, placeat provident!
              </p>
                <div className="container-price-course">
                <Link to='/enroll' class="enroll">Enroll Course</Link>
                   <div className="price">69$</div>
                </div>
            </div>
          </div>
        </article>
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
                <Link to='/enroll' class="enroll">Enroll Course</Link>
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
                <Link to='/enroll' class="enroll">Enroll Course</Link>
                   <div className="price">79$</div>
                </div>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src="https://cdn.ostad.app/course/cover/2024-12-19T15-55-32.073Z-Digital-Marketing.jpg" alt="" />
            </figure>
            <div class="article-body">
              <h2 className="course-name-course">Fullstack Digital Marketing Course in 2025</h2>
              <p className="context">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem obcaecati quibusdam architecto aspernatur, placeat provident!
              </p>
                <div className="container-price-course">
            <Link to='/enroll' class="enroll">Enroll Course</Link>
                   <div className="price">69$</div>
                </div>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src="https://cdn.ostad.app/course/photo/2025-01-25T19-26-56.383Z-SEO-Thumbnail.jpg" alt="" />
            </figure>
            <div class="article-body">
              <h2 className="course-name-course">Generative Ai Driven SEO Mentorship program</h2>
              <p className="context">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem obcaecati quibusdam architecto aspernatur, placeat provident!
              </p>
                <div className="container-price-course">
                <Link to='/enroll' class="enroll">Enroll Course</Link>
                   <div className="price">79$</div>
                </div>
            </div>
          </div>
        </article>
        </section>
        <Footer />
      </div>
    );
}

export default AllCourses;
