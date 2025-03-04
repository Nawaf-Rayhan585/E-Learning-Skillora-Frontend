import React from 'react';
import './PopularCourses.css'
import {Link} from 'react-router-dom'

const PopularCourses = () => {
    return (
    <div>
        <h1 className='title-popular block'>Popular Courses</h1>
        <p className='popular-context block'><span className="highlight">Popular And Affordable Courses</span> Our Students Choosed</p>
        <section class="articles">
          <article className='block'>
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
          <article className='block'>
            <div class="article-wrapper block">
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
          <article className='block'>
          <div class="article-wrapper block">
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
        </section>
      </div>
    );
}

export default PopularCourses;
