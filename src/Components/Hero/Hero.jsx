import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Allan Mwenja,</span> frontend developer based in Kenya.</h1>
        <p>I am a full-stack developer with expertise in Angular, React, React Native, Node.js, and Next.js, specializing in building scalable, user-focused applications. My experience spans the entire development lifecycle—from ideation and design to deployment and optimization.
</p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero