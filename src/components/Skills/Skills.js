import React from 'react'
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import './skills.css';

const Skills = () => {
  return (
   <section id='skills'>  

  <span className='skillTitle'> What I do</span>
  <span className='skillDesc'> I'm a Fullstack Developer, Social Media Manager, Content Writer, and Community Manager in the crypto world. <br />  I build, write, and connect. I create safe blockchain tech, share crypto stories, and bring folks together online. </span>

  <div className='skillBars'>

    <div className="skillBar">
        <img src={UIDesign} alt="" className="skillBarImg" />
        <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Translate Figma designs to codes</p>
        </div>
    </div>

    <div className="skillBar">
        <img src={WebDesign} alt="" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Full-Stack Development</h2>
            <p>I am skill Full-Stack engineer with experience in TailwindCSS JavaScript,TypeScripts, React, Nextjs, Expressjs, Nodejs.</p>
            <a href="Fullstack developer.pdf" download="Fullstack developer.pdf">
  <button className="workBtnSkill">Resume</button>
</a>
        </div>
    </div>


    <div className="skillBar">
        <img src={AppDesign} alt="" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Other Professions </h2>
            <p>Community Manager, Social Media Manager, Content Writer, Marketing Manager</p>
            <a href="social media manager.pdf" download="social media manager.pdf">
  <button className="workBtnSkill">Resume</button>
</a>
        </div>
    </div>


  </div>


   </section>
  )
}

export default Skills