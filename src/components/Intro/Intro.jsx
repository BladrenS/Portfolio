import React from 'react';
import rock from '../../assets/rock.svg'
import './intro.css'
import rama from '../../assets/rama.png'
import Button from '../Button/Button';

const Intro = () => {



   return (
      <section className='section under'>
         <div className="container">
            <div className="intro__inner">
               <div className="inner__block">
                  <div className='greeting'>Aloha, I`m BladrenS! <img className='rock' src={rock} alt="rock"/></div>
                  <div className='doing'>I Make Awesome &#128629; Useless Shit.</div>
                  <div className='doing__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                  <Button text={'Work with me'}/>
               </div>
              <div className="inner__block right">
                  <div className="lants one"></div>
                  <div className="lants two"></div>
                  <div className="lants three"></div>
                  <div className="lants four"></div>
                  <div className="rama">
                     <img className='rama' src={rama} alt="" />
                  </div>
              </div>
            </div>
         </div>
      </section>
   );
};

export default Intro;