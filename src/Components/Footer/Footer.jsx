import React from 'react'
import { Link } from 'react-scroll';
import "./Footer.css";

export const Footer = () => {
  return (
   <section id='footer'>

    <div className='footer-components'>
        <div className='footer-items'>
          <ul className='items' >
                <li className="items"><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li className="items"><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li className="items"><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
                <li className="items"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
           </ul>

          <div className='social-media'>
          <a  href="https://www.linkedin.com/in/suraj0810/"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/Surajpandey08"><i class="fa-brands fa-github"></i></a> 
        <a href="https://twitter.com/Surajj08"><i class="fa-brands fa-x-twitter"></i></a>
          </div>

          <div className='copyright'>
            <p><i class="far fa-copyright"></i> Suraj Pandey 2024</p>
          </div>
        
      </div>

    </div>

   </section>
  )
}
