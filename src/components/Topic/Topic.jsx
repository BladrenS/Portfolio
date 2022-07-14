import React from 'react';
import './topic.css'

const Topic = ({name, text}) => {

   if (name === undefined) name = ''

   return (
      <div className="topic__header">
         <div className={"topic__head " + name}>
            {text}
         </div>
         <div className="topic__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </div>
      </div>
   );
};

export default Topic;