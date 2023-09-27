import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'


const Works = () => {
  return (
   <section id='works'>
   <h2 className='worksTitle'> My Portfolio </h2>
   <span className='worksDesc'> I take pride in paying attention to the smallest details and my works speaks volumes. <br /> I'll upload my portfolio here, but at the primary time <br /> <span className='resume'> Download my Resume below</span> for more information.</span>

   <div className="worksImgs">

   <img src={Portfolio1} alt="" className='worksImg' /> 
    <img src={Portfolio2} alt="" className='worksImg' />
    <img src={Portfolio3} alt="" className='worksImg' />
    <img src={Portfolio4} alt="" className='worksImg' />
    <img src={Portfolio5} alt="" className='worksImg' />
    <img src={Portfolio6} alt="" className='worksImg' />

    </div>

    <a href="Fullstack developer.pdf" download="Fullstack developer.pdf">
  <button className="workBtn">Resume</button>
</a>
   </section>
  )
}

export default Works