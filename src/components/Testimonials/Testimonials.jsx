import React from 'react';
import Slider from '../Slider/Slider';
import Topic from '../Topic/Topic';

const Testimonials = () => {
   return (
      <section className="section light--grey testi">
         <div className="container">
            <Topic name={'t'} text={'What other people say'}/>
            <Slider/>
         </div>
      </section>
   );
};

export default Testimonials;