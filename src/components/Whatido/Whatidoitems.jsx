import React from 'react';
import './whatido.css'

const Whatidootems = ({header, text, icon}) => {
   return (
      <div className='item'>
         <img className='icon' src={icon} width={25} alt="" />
         <div className="item__inner">
            <div className="item__header">
               {header}
            </div>
            <div className="item__text">
               {text}
            </div>
         </div>
      </div>
   );
};

export default Whatidootems;