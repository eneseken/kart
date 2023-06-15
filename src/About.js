import React from 'react'
import TiltCard from './TiltCard'
import './About.css';

export default function About() {
  return (
    <section className="portfolio-section">



    <div className="portfolio-section-box">

    <span className='introduction-text'>Introduction</span>
    <h2>About <span>Me</span></h2>
    <p>I am a freelance designer with a passion for creating unique visuals that engage people and tell stories. I specialize in illustration, graphic design, content writing and web development, but also have experience in cyber security and network management. My goal is to create designs that are both aesthetically pleasing and functional, and that capture the client's intent. I am always eager to work with new clients and create meaningful projects.</p>
        
   
    <div className='conatiner'>
    <TiltCard image="images/web.png" title="Web Developer" />
    <TiltCard image="images/mobile.png" title="UI/UX Designer" />
    <TiltCard image="images/creator.png" title="Content Creator" />
    </div>    

    </div>


    </section>
  )
}
