import React from "react";
import "./CourseCategory.css";
import {Link} from 'react-router-dom'
const CourseCategory = () => {
  return (
    <>

        <h1 className="title block">Course Categories</h1>
        <p className="course-category-context-top block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum minus aliquid enim recusandae sapiente libero inventore accusamus quas obcaecati!</p>

      <div className="container-courses">

    <Link to='/development'>
        <div className="course-category block">
          <div className="icon-container"><i class="bi bi-code-slash icon1"></i></div>
          <h2 className="course-name">Development</h2>
          <p className="context-category-course">Development Teached by the best Mentors</p>
        </div>
    </Link>
    

    <Link to='/design'>
        <div className="course-category block">
          <div className="icon-container"><i class="bi bi-brush icon2"></i></div>
          <h2 className="course-name">UI/UX & Design</h2>
          <p className="context-category-course">Learn Everything About Design And UI/UX</p>
        </div>
    </Link>

    <Link to='/business'>
        <div className="course-category block">
          <div className="icon-container"><i class="bi bi-graph-up icon3"></i></div>
          <h2 className="course-name">Business & Marketing</h2>
          <p className="context-category-course">All concept of Digital Marketing And Business</p>
        </div>
    </Link>

      </div>

      <div className="container-courses2">

    <Link to='/ai'>
      <div className="course-category block">
          <div className="icon-container"><i class="bi bi-robot icon4"></i></div>
          <h2 className="course-name">Artificial Intelligence</h2>
          <p className="context-category-course">Learn Everything About Artificial Intelligence</p>
      </div>
    </Link>

    <Link to='/data'>
        <div className="course-category block">
          <div className="icon-container"><i class="bi bi-database icon5"></i></div>
          <h2 className="course-name">Data Engineering</h2>
          <p className="context-category-course">Data Engineering Teached By the best Mentors</p>
        </div>
    </Link>
    
      </div>
    </>
  );
};

export default CourseCategory;
