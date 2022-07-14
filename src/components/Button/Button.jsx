import React from 'react'
import './button.css'
import { Link } from "react-scroll"

const Button = ({backgrnd, glow, text}) => {

   if (backgrnd === undefined) backgrnd = ''
   if (glow === undefined) glow = ''
   if (text === undefined) glow = '' 

   return (
      <div className="short">
      <Link
         activeClass="active"
         to="contact"
         spy={true}
         smooth={true}
         offset={-30}
         duration={500}>
         <div className={'button '}>
            <div className={'button__text ' + backgrnd}>
               <span className={'wwm '}>{text}</span>
            </div>
            <div className={'button__glow ' + glow}> 
            </div>
         </div>
      </Link>
      </div>

      
   );
};

export default Button;