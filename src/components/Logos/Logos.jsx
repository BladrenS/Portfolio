import React from 'react';
import './logos.css'
import freelancer from '../../assets/freelancer.svg'
import upwork from '../../assets/upwork.svg'
import fiverr from '../../assets/fiverr.svg'
import github from '../../assets/github.svg'
import behance from '../../assets/behance.svg'


const Logos = () => {

   return (
      <section className='section section--grey'>
         <div className="container">
            <div className="logos">
               <div className="logo">
                  <img src={freelancer} alt="" />
               </div>
               <div className="logo">
                  <img src={upwork} alt=""/>
               </div>
               <div className="logo">
                  <img src={fiverr} alt=""/>
               </div>
               <div className="logo">
                  <img src={github} alt=""/>
               </div>               
               <div className="logo">
                  <img src={behance} alt=""/>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Logos;