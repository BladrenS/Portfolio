import React from 'react';
import './contact.css'
import Topic from '../Topic/Topic';
import mail from '../../assets/email.svg'
import geo from '../../assets/geo.svg'
import Button from '../Button/Button';


const Contact = () => {
   return (
      <section className="section contact">
         <div className="container">
            <Topic name={'c'} text={'Contact me'}/>
            <div className="contact__block">
               <div className="contact__left">
                  <div className="left__item">
                     <img className='left__img' src={mail} width={25} alt="" />
                     <div className="left__inner">
                        <div className="left__header">
                           Have a question?
                        </div>
                        <div className="left__mid">
                           I am here to help you!
                        </div>
                        <div className="left__bot">
                           Email me at xxxshicoxxx@gmail.com
                        </div>
                     </div>
                  </div>
                  <div className="left__item">
                     <img className='left__img' src={geo} width={25} alt="" />
                     <div className="left__inner">
                        <div className="left__header">
                           Current location
                        </div>
                        <div className="left__mid">
                           Omsk, Russia
                        </div>
                        <div className="left__bot">
                           Serving clients worldwide
                        </div>
                     </div>
                  </div>
               </div>
               <div className="contact__right">
                  <div className="form">
                     <div className="inputs">
                        <input type="text" placeholder='Your name'/>
                     </div>
                     <div className="inputs">
                        <input type="email" placeholder='Your email'/>
                     </div>
                     <div className="inputs">
                        <input type="text" placeholder='Subject'/>
                     </div>
                     <div className="inputs">
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Your message'></textarea>
                     </div>
                  </div>
                  <Button backgrnd={'orange reverse'} glow={'none'} text={'Send message'}/>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;