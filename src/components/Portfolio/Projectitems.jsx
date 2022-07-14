import React from 'react';
import './portfolio.css'


const Projectitems = ({counter, img, type, link}) => {
   

   return (
      <div className="project__item">
         <div className="project__img">
            <img className='img' src={img} alt=""/>
            <a target="_blank" className='link' href={link} rel="noreferrer">Link to Github</a>
         </div>
         <div className="project__category">{type}</div>
         <div className="project__name">Project name {counter}</div>
         <div className="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
      </div>
   );
};

export default Projectitems;