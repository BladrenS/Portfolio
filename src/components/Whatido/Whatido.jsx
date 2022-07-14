import React from 'react';
import Topic from '../Topic/Topic';
import './whatido.css'
import Whatidootems from './Whatidoitems';
import design from '../../assets/design.svg'
import settings from '../../assets/settings.svg'
import pen from '../../assets/pen.svg'
import seo from '../../assets/seo.svg'


const Whatido = () => {
   return (
      <section className="section dark--grey services">
         <div className="container">
            <Topic name={'s'} text={'What I do for clients'}/>
            <div className="whatido">
            <Whatidootems header={'Web Design'} icon={design} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            <Whatidootems header={'Web Development'} icon={settings} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            <Whatidootems header={'Branding'} icon={pen} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..'}/>
            <Whatidootems header={'SEO'} icon={seo} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            </div>
         </div>
      </section>
   );
};

export default Whatido;