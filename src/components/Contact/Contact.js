import React from 'react'
import { useRef } from 'react';
import Exsports from '../../assets/exsports.png'
import Mobster from '../../assets/mobsterbg.png'
import Philcoin from '../../assets/philcoinbg.png'
import Turners from '../../assets/turners.svg'
import TwitterIcon from '../../assets/twitter.png'
import DiscordIcon from '../../assets/discordbg.png'
import GmailIcon from '../../assets/gmailbg.png'
import TelegramIcon from '../../assets/telegrambg.png'
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b4ep4lv', 'template_ajnmtbo', form.current, 'laXL2oNkTlPKWD19h')

      .then((result) => {

          console.log(result.text);

          e.target.reset(); 
          alert('Email sent!')

      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <section id='contactPage'>
        <div id="clients">
            <h1 className='contactPageTitle'> My Client</h1>
            <p className='clientDesc'>I Have had the opportunity to work with a diverse group of Crypto/Web3 Projects.
            some of the notable companies I Have worked with includes
            </p>

            <div className="clientImgs">
              <img src={Exsports} alt="" srcset="" className='clientImg' /> 
              <img src={Mobster} alt="" srcset="" className='clientImg' /> 
              <img src={Philcoin} alt="" srcset="" className='clientImg' />
              <img src={Turners} alt="" srcset="" className='clientImg' /> 
            
            </div>
        </div>

        <div id="contact">
            <h1 className="contactPageTitle"> Contact Me</h1>
            <span className='contactDesc'>To inquire about any work-related vocations, kindly complete the form below.


</span>

            <form className="contactForm" ref={form} onSubmit={sendEmail}>

                <input type="text" className='name' placeholder='Your Name' name='your_name' />
                <input type="email" className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name="message" rows="5" placeholder='Your Message' ></textarea>
                <button className='submitBtn' type='submit' value='send'>Submit</button>




                <div className="links">
                    
                    <img src={TwitterIcon} alt="" className="link" />
                    <img src={TelegramIcon} alt="" className="link" />
                    <img src={DiscordIcon} alt="" className="link" />
                    <img src={GmailIcon} alt="" className="link" />
                
                </div>




            </form>
        </div>

    </section>
  )
}

export default Contact