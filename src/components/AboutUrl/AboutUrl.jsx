import React from 'react';
import './AboutUrl.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {Link} from 'react-router-dom'

const About = () => {
  const toastUnavailable = () => {

    toast('Sorry, This Video Is Unavailable', {
      position: 'top-right',
      autoClose: 5000,
      icon: '😓',
  });

  };
    return (
        <div>
            <Navbar/>
            <br /><br /><br /><br /><br /><br />
            <Link to='/' className="button-back about-back">Go Back <i class="bi bi-box-arrow-left"></i></Link>
                <div className="context-about-container">
                    <p className='context-main'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, commodi nihil aliquam nostrum adipisci maxime numquam tempora consectetur laudantium reiciendis qui. Possimus corrupti corporis alias unde itaque dolores in repellat, sapiente vero obcaecati sit repudiandae nisi deleniti? Illum excepturi incidunt maiores corporis, neque deserunt aut? Accusamus, dolorem. Et nam esse quae corrupti maxime ab facilis officiis, sequi, odit harum quam eaque, nobis deleniti rem! Rem et ea rerum, voluptatum maiores alias nobis, quia mollitia placeat aut natus sed eum molestiae, amet itaque cum veniam inventore nihil nulla optio est obcaecati? Esse minus molestias minima repellendus commodi quia voluptatem vero sit tempore, illum deserunt hic eius reprehenderit impedit quas veniam a sequi sed animi odit, molestiae maxime suscipit sapiente! Veniam vel aliquid in inventore voluptate natus quisquam, minima adipisci nemo vitae commodi cum facere, ratione aut iusto? Ex aperiam explicabo sed ut, animi, vel quibusdam veritatis mollitia eum pariatur, iure aspernatur! Nam, velit quia commodi placeat repudiandae alias cupiditate omnis optio, soluta doloribus consectetur! Ipsum aliquam sapiente, assumenda totam, perferendis maxime iure quas aut soluta consectetur, quo delectus qui repudiandae quidem. Corrupti, beatae exercitationem voluptate fugit expedita sunt vitae facilis, quas earum, ipsam incidunt vel. Inventore odio neque accusantium quo numquam!</p>
                    <div className="link-container">
                    <a href="#" className='link-about btn-fill'>Link</a><a href="" className='link-about btn-fill'>Link</a><a href="" className='link-about btn-fill'>Link</a><a href="" className='link-about btn-fill'>Link</a><a href="" className='link-about btn-fill'>Link</a>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default About;
