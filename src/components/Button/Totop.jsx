import React from 'react';
import './button.css'
import top from '../../assets/totop.svg'
import { animateScroll as scroll } from "react-scroll";


const Totop = () => {

   return (
      <div onClick={scroll.scrollToTop} className='totop'>
         <img width={25} src={top} alt="" />
      </div>
   );
};

export default Totop;