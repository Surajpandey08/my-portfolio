import React from 'react'
import"./About.css"
import design from "../../Assests/design.png"
import code from "../../Assests/code.png"
import skills from "../../Assests/consulting.png"




export const About = () => {
  return (
   <section id='about'>
    
    <h1>About</h1>
    <div className='description'>

    <p >My journey into the world of web development began with a curiosity to explore the endless possibilities of the digital realm. Through continuous learning and hands-on experience, I've honed my skills in frontend and backend technologies,  allowing me to build robust and scalable solutions tailored to meet the unique needs of each project.</p>

    </div>
    
    <div className='row'>
        <div className='container'>
            <img src={design} alt="" />

            <h3>Web & App Designs</h3>
            <p>Crafting visually stunning web and app designs that blend form with function. From wireframes to pixel-perfect interfaces, I ensure every detail enhances user experience and captivates audiences.</p>

        </div>
        <div className='container'>
        <img src={code} alt="" />

        <h3>Web Devlopment</h3>
        <p>Empowering digital innovation through dynamic web development solutions. From frontend mastery in React to backend prowess with Node.js, I architect robust applications that drive results and exceed expectations.</p>

        </div>

    </div>
    <div className='row'>
        <div className='container'>
        <img src={skills} alt="" />

        <h3>Skills</h3>

        <p className='tags'>
            <span><i class="fa-brands fa-html5"></i> HTML</span>
            <span><i class="fa-brands fa-css3-alt"></i> CSS</span>
            <span><i class="fa-brands fa-js"></i> JavaScript</span>
            <span><i class="fa-brands fa-react"></i> ReactJS</span>
            <span><i class="fa-brands fa-node-js"></i> NodeJS</span>
            <span><i class="fa-solid fa-database"></i> Database</span>
            <span><i class="fa-brands fa-git-alt"></i> Git</span>
            <span><i class="fa-brands fa-figma"></i> Figma</span>
            <span>REST API</span>
            <span>ExpressJS</span>
            <span><i class="fa-brands fa-github"></i> GitHub</span>
        
        </p>

        </div>
    </div>
   </section>
  )
}
