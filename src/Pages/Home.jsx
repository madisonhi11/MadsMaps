import React from 'react'
import { Footer } from '../Components/Footer'
import Navbar from '../Components/Navbar'
import './Css/Home.css'
import { Link } from 'react-router-dom'
// import { Myimg } from './img'
import image from './Images/madsmaps.png'

const Home = () => {
  return (
      <> 
      <div className='Wrapper'>
      <Navbar/>
      <h1 style={{textAlign:"center"}}>
          Lets Go For A Trip
      
      </h1>
     
      
    <div className='Wrappers'>
      <Link to='/favorites'>   
               <div className='MyIcon'> 
               <img src={image} alt='pic'></img>
          {/* Image */}
          </div></Link>
     </div> 
{/* <Myimg/> */}

<Footer/>          
  
          </div>
      </>

  )
}

export default Home