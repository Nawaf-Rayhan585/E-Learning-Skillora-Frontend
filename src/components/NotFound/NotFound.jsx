import React from 'react';
import notfound from '../../assets/404.png' 
import {Link} from 'react-router-dom'
import './NotFound.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const NotFound = () => {
    return (
      <div>
        <Navbar />
           <br /><br /><br /><br /><br /><br /><br/>
        <Link to='/' className="button-back">Go Back <i class="bi bi-box-arrow-left"></i></Link>
            <img src={notfound} className='img-notfound' alt="" />
            <h1 className='text-center'>Page Not Found</h1>
            <p className='text-center'>Sorry, the page you're looking for doesn't exist.</p>
            <br />
        <Footer />
      </div>
    );
}

export default NotFound;
