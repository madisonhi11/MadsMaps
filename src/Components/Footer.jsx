import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
   <>
   <div className="footer">
      <div>
        <div className="footer-content">
          <h3
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: "2em"
            }}
          >
            <em>MADs</em>MAPs
          </h3>
          <p>MAD's Maps is a website for all of your Charlotte resturant needs.</p>
          <div className="sub">

            <div>
              <Link to='/'><b>Home</b>  </Link>
           
            </div>
            <div>  
             <Link to='/friendlist'><b>Friend List</b></Link> 
              <p>Add Your friends </p>
              
            </div>
            <div>
            <Link to='/favorites'> <b>CLT Map</b></Link>
             <p>Get directions for CLT Restaurants </p>
              <p>Track your Favorite Restaurant</p>
            
            </div>
          
          </div>
        </div>
      </div>
    </div>
   
   </>
  )
}
