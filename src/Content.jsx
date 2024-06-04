import React, { useEffect } from 'react'
import './landing.css'
import { gsap } from 'gsap'    
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

function Content() {
useEffect(() => {
  gsap.fromTo('.btn-container', {
    opacity : 0,
    y : 0,
  },
  {
    opacity : 1,
    // y : 0,
    duration : 2,
    scrollTrigger : '.btn-description',
  },) 
  gsap.fromTo('.btn-description', {
    opacity : 0,
  },
  {
    opacity : 2,
    y : 0,
    x : 0,
    duration : 2,
    scrollTrigger : '.btn-description',
  },) 
},[])
  let description = 'Welcome to Dotworld,where a dynamic team of robotics engineer, design enthusiasts, and innovation champions unite.  Here, we thrive on cutting-edge tech, fostering growth, and celebrating our passion for progress.'
  return (
    <div >
        <div className='btn-container'>
            <a href="https://dotworld.in/about" className='how-it-started'>How it started</a>
        </div>
        <div className='btn-description'>{description}</div>
    </div>
  )
}

export default Content