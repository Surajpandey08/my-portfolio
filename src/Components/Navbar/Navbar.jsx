import React from "react";
import "./Navbar.css"
import { Link } from 'react-scroll';


export const Navbar = () => {

    
  return (
    <div className="navbar">
         
       
            <ul className="menu">
                <li className="items"><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li className="items"><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li className="items"><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
                <li className="items"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
            
      
       
    </div>
  )
}
