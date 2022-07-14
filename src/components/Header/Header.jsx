import "./header.css"
import React from 'react';
import lamp from '../../assets/lampion.svg'
import play from '../../assets/play.svg'
import wa from '../../assets/whatsapp.svg'
import telega from '../../assets/telega.svg'
import git from '../../assets/git.svg'
import { Link } from "react-scroll"
import Totop from "../Button/Totop"


const Header = () => {

   function show(){
      document.querySelector('.header__burger').classList.toggle('shown')
      document.querySelector('.header__links').classList.toggle('showns')
      document.querySelector('.header__buttons').classList.toggle('shownss')
      document.querySelector('.circle').classList.toggle('open')
   }

   function hide(){
      document.querySelector('.header__burger').classList.remove('shown')
      document.querySelector('.header__links').classList.remove('showns')
      document.querySelector('.header__buttons').classList.remove('shownss')
      document.querySelector('.circle').classList.remove('open')
   }

   return (
      <header className='header'>
         <div className="container">
            <div className="header__inner">
               <div className="header__logo">
                  <img src={lamp} alt="L" />
                  <span className='lampion'>Lampion</span>
               </div>
               <div className="header__links">
                  <Link
                     onClick={hide}
                     activeClass="active"
                     to="under"
                     spy={true}
                     smooth={true}
                     offset={-80}
                     duration={500}>
                     <div className="header__link">Home</div>
                  </Link>
                  <Link
                     onClick={hide}
                     activeClass="active"
                     to="about"
                     spy={true}
                     smooth={true}
                     offset={-80}
                     duration={500}>
                     <div className="header__link">About</div>
                  </Link>
                  <Link
                     onClick={hide}
                     activeClass="active"
                     to="portfolio"
                     spy={true}
                     smooth={true}
                     offset={-80}
                     duration={500}>
                     <div className="header__link">Portfolio</div>
                  </Link>
                  <Link
                     onClick={hide}
                     activeClass="active"
                     to="services"
                     spy={true}
                     smooth={true}
                     offset={-74}
                     duration={500}>
                     <div className="header__link">Services</div>
                  </Link>
                  <Link
                     onClick={hide}
                     activeClass="active"
                     to="testi"
                     spy={true}
                     smooth={true}
                     offset={-60}
                     duration={500}>
                     <div className="header__link">Testimonials</div>
                  </Link>
                  <Link
                     onClick={hide}
                     activeClass="active"
                     to="contact"
                     spy={true}
                     smooth={true}
                     offset={-30}
                     duration={500}>
                     <div className="header__link">Contact</div>
                  </Link>
               </div>
               <div className="header__buttons">
                  <a onClick={hide} target="blank" className="header__icons" href="https://wa.me/79230477255">
                     <img className="header__button" src={wa} alt="Telega" />
                  </a>
                  <a onClick={hide} target="blank" className="header__icons" href="https://www.youtube.com/watch?v=5xG09d3WcGo&ab_channel=xander%EA%93%B8mpg">
                     <img className="header__button" src={play} alt="Telega" />
                  </a>
                  <a onClick={hide} target="blank" className="header__icons" href="https://t.me/BladrenS">
                     <img className="header__button" src={telega} alt="WA" />
                  </a>
                  <a onClick={hide} target="blank" className="header__icons" href="https://github.com/BladrenS">
                     <img className="header__button" src={git} alt="Git" />
                  </a>
               </div>
               <button onClick={show} className="header__burger" id="header__burger" type="button">
                  <span className="header__burger__item">Menu</span>
               </button>
               <div className="circle">Circle</div>
            </div>
         </div>
         <Totop />
      </header>

   );
};

export default Header;