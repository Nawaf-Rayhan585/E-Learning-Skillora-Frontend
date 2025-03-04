
import './Hero.css'
import HeroShape1 from'../../assets/heroimages/main.png'
import toast from 'react-hot-toast'
import Popup from '../Popup/Popup'
import {Link} from 'react-router-dom'

const Hero = () => {

    const toastSearch = () => {
        toast('Searching..', {
            position: 'top-right',
            autoClose: 5000,
            icon: '⌛',
        });
    }
    return (
     <>
     <Popup/>
     <div class="container-hero">
        <div class="content-wrapper">
            <div class="content">
                


                <div className='header-container'><h1 className="heroHeader">Education for a <span className='span'> Brighter Tomorrow</span></h1></div>

                <p>Learn the most popular courses, Teached by certified best Mentors. Cheap and affordable, Change your Tommorow!</p>

                
                <div className="input">
                    <input className='search-input' type="text" placeholder='Search'/><a href="#" class="button" onClick={toastSearch}><i class="bi bi-search icon-hero"></i></a>
                </div>


                <div className="button-flex">
                   <button className='btn-fill btn-hero'>Contact Us</button>
                   <Link to='/courses'><button className='btn-outline btn-hero'>Explore Courses</button></Link>
                </div>
            </div>


            <div class="image-container">
                <img src={HeroShape1} className='img' alt="Sample Image"/>
            </div>
        </div>
    </div>


     </>
    );
}

export default Hero;



