import React from 'react'
import { useState } from "react";
import {Link} from "react-router-dom";
// import Friendlist from '../Pages/Friendlist';
import './Css/Navbar.css'

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
    <a href="/" className="brand-name">
    <h3
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: "2em"
            }}
          >
            <em>MADs</em>MAPs
          </h3>
    </a>
    <button
      className="hamburger"
      onClick={() => {
        setIsNavExpanded(!isNavExpanded)
      }}
    >
      {/* hamburger svg code... */}
    </button>
    <div
      className={
        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
      }
    >
      <ul>
        <li>
          {/* <a href="/">Home</a> */}
          <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/friendlist'>Friend List</Link>

          {/* <a href="/about">About</a> */}

        </li>
        <li>
          {/* <a href="/contact">Contact</a> */}
          <Link to='/favorites'>Map</Link>

        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar