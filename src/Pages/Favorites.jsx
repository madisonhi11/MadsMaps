import React from 'react'
import { Footer } from '../Components/Footer'
import Navbar from '../Components/Navbar'
import './Css/Home.css'
import { Gallery } from './Gallery'

export const Favorites = () => {

    

  return (
    <>
    <div className='Wrapper'>    
 <Navbar/>

      <div className='wrap'>
              {/* <iframe title="myFrame"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
           width="600"
           height="450"
           style={{ border: "0" ,margin:"auto"}}
           allowfullscreen=""
           loading="lazy"></iframe>   */}
           <iframe title="myFrame" width="600" height="450" style={{border:"0",margin:"auto"}} loading="lazy"  src="https://www.google.com/maps/embed/v1/search?q=restaurants%20near%20Charlotte%2C%20NC%2C%20USA&key=AIzaSyBlknE4pW0lNisbvcKb7gr_9DesMvt7MJQ"></iframe>
      </div>

         <Gallery/>
         
          
  
          </div>
          <Footer/>
    </>
  )
}
