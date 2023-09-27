import React from 'react'
import './intro.css'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
   <section id='intro'>
  <div className="introContent">
    <span className='hello'>Hello,</span>
    <span className='introText'>I'm
    
     <span className='introName'> Joseph </span>
     
      <br />
     
      FullStack (MERN)  developer
      
      </span>
      <p className='introPara'>I'm a skilled Full-Stack Developer specalizing in MERN stack  <br /> with 2+ years experience with Front-end and Back-end. <br /> Currently i'm focused on building an online freelance experience to gain more expertise. </p>
      
      <Link> <button className='btn'onClick={() =>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
      }} > <img src={btnImg} alt="Hire" className='btnImg' /> Hire Me </button> </Link>

  </div>
  
    

   </section>
  )
}

export default Intro;