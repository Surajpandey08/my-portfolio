import React from 'react'
import "./Portfolio.css"
import dopt from "../../Assests/dopt.png"
import mobilepathshala from "../../Assests/mobilepathshala.png"
import nanheindians from "../../Assests/nanheindians.png"
import builtf from "../../Assests/builtf.png"




const data=[

  {
    id:1,
    image: mobilepathshala,
    title: "Mobile Pathshala",
    description: "Collaborated with a team to enhance the front-end of an online educational platform, specializing in competitive exam courses. Leveraged React.js to craft a responsive and user-friendly interface, ensuring an optimal learning experience.",
    link: "http://mobilepathshala.com/"
  
  
  
  
  },
  
  {
    id:2,
    image: nanheindians,
    title: "Nanhe Indians",
    description:"Developed a descriptive website for an NGO aimed at conveying its mission effectively to users. Utilized a combination of JavaScript, HTML, CSS, and PHP to create a compelling online presence that highlights the organization's objectives and impact.",
    link: "https://nanheindian.org/index.html"
  
  
  
  
  },
  
  {
    id:3,
    image:dopt,
    title: "Traning Division",
    description: "Redesigned a government website under DOPT's umbrella, enhancing its user interface and experience. Utilized HTML, CSS, Bootstrap, and JavaScript to overhaul the site, enhancing accessibility and functionality for users engaging with government training resources.",
   link: "https://dopttrg.nic.in/ "
  
  
  
  
  },
  
  {
    id:4,
    image:builtf,
    title: "Builtf",
    description: "Currently engaged in developing a service provider website catering to local communities. Employing a tech stack consisting of React.js, Node.js, and MongoDB to establish a robust platform connecting users with nearby services efficiently, thereby enhancing convenience and accessibility.",
    link: "https://builtf.com/"
  
  
  
  
  },
  
  
  
  
  ]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
       
       <h1>Portfolio</h1>

       <div className='portfolio-container'>
        {data.map(({id, image, title, description, link}) => {

          return(
            <div key={id} className='portfolio-cards'>

          <div className='portfolio-img-wrapper'>
          
          <img src={image} alt="" />

          </div>

          <div className='portfolio-img-description'>

            <h3>{title}</h3>
            <button className='visit-btn'><a href={link}>Visit</a></button>

          </div>
          
          


        </div>
          )

        
        
        })
}
        

       </div>
        
    </section>
  )
}
