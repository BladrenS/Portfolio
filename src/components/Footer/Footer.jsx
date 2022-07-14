import React from 'react';
import './Footer.css'
import play from '../../assets/play.svg'
import wa from '../../assets/whatsapp.svg'
import telega from '../../assets/telega.svg'
import git from '../../assets/git.svg'
import lamp from '../../assets/lampion.svg'

const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
            <div className="header__inner foot">
            <div className="footer__buttons">
               <a target="blank" className="header__icons" href="https://wa.me/79230477255">
                  <img className="header__button" src={wa} alt="Telega" />
               </a>
               <a target="blank" className="header__icons" href="https://www.youtube.com/watch?v=5xG09d3WcGo&ab_channel=xander%EA%93%B8mpg">
                  <img className="header__button" src={play} alt="Telega" />
               </a>
               <a target="blank" className="header__icons" href="https://t.me/BladrenS">
                  <img className="header__button" src={telega} alt="WA" />
               </a>
               <a target="blank" className="header__icons" href="https://github.com/BladrenS">
                  <img className="header__button" src={git} alt="Git" />
               </a>
            </div>
               <div className="header__logo">
                  <img src={lamp} alt="L" />
                  <span className='lampion'>Lampion</span>
               </div>
               <span className="rights">@ 2022 BladrenS. All rights reserved.</span>
            </div>
         </div>
      </footer>
   );
};

export default Footer;