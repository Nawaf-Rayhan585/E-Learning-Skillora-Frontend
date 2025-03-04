import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Development.css'
import { Link } from "react-router-dom";

const Data = () => {
  return (
    <div>
      <Navbar />
      <br /><br /><br /><br /><br /><br /><br/>
      <Link to='/' className="button-back">Go Back <i class="bi bi-box-arrow-left"></i></Link>
      <br /><br /><br /><br /><br /><br /><br/>
              <div className="icon-nocourse"><i class="bi bi-camera-video-off"></i></div>
              <h2 className="nocourse">No Course Yet Have Been Uploaded About Data Engineering</h2>
              <p className="nocourse-context">
                Sorry For Our Inconvinience, We'll Will Update After Making A Course About Data Engineering.
              </p>
      <Footer />
    </div>
  );
};

export default Data;
