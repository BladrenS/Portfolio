import React from 'react';
import Button from '../Button/Button';
import "./about.css"
import proger from '../../assets/proger.webp'

const About = () => {
   return (
      <section className="section light--grey about">
         <div className="container">
            <div className="about">
               <div className="about__block">
                  <div className="proger__img">
                     <img className='proger' src={proger} alt="Proger" />
                  </div>
               </div>
               <div className="about__block">
                  <div className="about__header">
                     <div className="about__nick">
                        BladrenS
                     </div>
                     <div className="about__prof">
                        Frontend Web Developer
                     </div>
                  </div>
                  <div className="about__info">                     
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                  <Button backgrnd={'orange'} glow={'none'} text={'Contact me'}/>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;