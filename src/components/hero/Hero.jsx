import React from 'react'
import "./Hero.scss"
import {motion} from "framer-motion"
import { TypeAnimation } from 'react-type-animation';
import Project from '../Projects/Project';
const textvar={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollb:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    },
};
const slidervar={
    initial:{
        x:0,
       
    },
    animate:{
        x:"-200%",
        transition:{
            duration:5,
            repeat:Infinity,
            repeatType:"mirror",
        },
    },
};
const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
        <motion.div className='textContainer' 
        variants={textvar}
        initial='initial'
        animate='animate'>
            
            <motion.h2 variants={textvar}>SMIT MANISH VORA</motion.h2>
            <motion.h1 variants={textvar} className='h1_me'><TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Full Stack Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Coding Enthusiast',
        1000,
        'Footballer',
        1200,
        'Web Designer',
        1200
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></motion.h1>
            <motion.div className='buttons' variants={textvar}> 
            <a href='#Projects'><motion.button variants={textvar}>See my Latest works!</motion.button></a>
            <a href='#Contact'><motion.button variants={textvar}>Contact</motion.button></a>
            </motion.div>
            <motion.img variants={textvar} src='/scroll.png' alt="" animate="scrollb"/>
            </motion.div>
        </div>
        {/* <motion.div className='slidingText' variants={slidervar} initial="initial" animate='animate'>
            Thinker Problem Solver
        </motion.div> */}
        <div className='imgcontainer'>
            <img src="/smit.png" className='h_img' alt=""/>
        </div>
    </div>
  )
}

export default Hero