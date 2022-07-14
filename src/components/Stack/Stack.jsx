import React from 'react';
import './stack.css'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import js from '../../assets/js.svg'
import ts from '../../assets/ts.svg'
import react from '../../assets/react.svg'

const Stack = () => {

   return (
      <section className='section section--grey'>
         <div className="container">
            <div className="stacks">
               <div className="stack">
                  <img src={html} width={50} alt="" />
               </div>
               <div className="stack">
                  <img src={css} width={50} alt=""/>
               </div>
               <div className="stack">
                  <img src={js} width={50} alt=""/>
               </div>
               <div className="stack">
                  <img src={ts} width={50} alt=""/>
               </div>               
               <div className="stack">
                  <img src={react} width={50} alt=""/>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Stack;