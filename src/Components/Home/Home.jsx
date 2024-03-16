import React from 'react'
import"./Home.css"
import waveimg from "../../Assests/dev-ed-wave.png"

export const Home = () => {
  return (
    <section id='home'>
      <div className='intro'>
        <h1>Hi. I'm Suraj.</h1>
        <h3>Developer & Designer.</h3>
        <p>Transforming concepts into stunning reality with tailored <br /> programming and visionary design. Let's make magic happen.</p>
        <div className='social-media'>
        <a  href="https://www.linkedin.com/in/suraj0810/"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/Surajpandey08"><i class="fa-brands fa-github"></i></a> 
        <a href="https://twitter.com/Surajj08"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
        <div class="circle">
        <img src={waveimg} alt="" />

        </div>


      
      </div>
    </section>
  )
}
