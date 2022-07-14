import React from 'react';
import Topic from '../Topic/Topic';
import './portfolio.css'
import Projectitems from './Projectitems';
import {
   Routes,
   Route,
   Link,
   Outlet,
 } from "react-router-dom";
import first from '../../assets/First.webp'
import axit from '../../assets/Axit.webp'
import pass from '../../assets/Password.webp'
import pomodoro from '../../assets/Pomodoro.webp'
import qr from '../../assets/Qr.webp'
import simplex from '../../assets/SimpleX.webp'
import timers from '../../assets/Timers.webp'
import todo from '../../assets/Todo.webp'
import weather from '../../assets/Weather.webp'

const Portfolio = () => {

   const arr = [<Projectitems counter={1} type={'Landing'} key={1976856} img={first} link={'https://github.com/BladrenS/First'}/>,
   <Projectitems counter={2} type={'Landing'} key={345678} img={axit} link={'https://github.com/BladrenS/First'}/>,
   <Projectitems counter={3} type={'Landing'} key={1234} img={simplex} link={'https://github.com/BladrenS/SimpleX'}/>,
   <Projectitems counter={4} type={'Pet JS'} key={123423} img={todo} link={'https://github.com/BladrenS/First-ToDo-list'}/>,
   <Projectitems counter={5} type={'Pet JS'} key={345} img={pomodoro} link={'https://github.com/BladrenS/Pomodoro'}/>,
   <Projectitems counter={6} type={'Pet JS'} key={1345} img={timers} link={'https://github.com/BladrenS/Timers'}/>,
   <Projectitems counter={7} type={'Pet React'} key={23456} img={qr} link={'https://github.com/BladrenS/QR-generator'}/>,
   <Projectitems counter={8} type={'Pet React'} key={3476345} img={weather} link={'https://github.com/BladrenS/Weather-App'}/>,
   <Projectitems counter={9} type={'Pet React'} key={345674351} img={pass} link={'https://github.com/BladrenS/First'}/>]

   function makeArrL(arr) {
      let result = []
      for(let i = 0; i < arr.length; i++){
         if(arr[i].props.type === 'Landing'){
            result.push(arr[i])
         }
      }
      return result
   }

   function makeArrJs(arr) {
      let result = []
      for(let i = 0; i < arr.length; i++){
         if(arr[i].props.type === 'Pet JS'){
            result.push(arr[i])
         }
      }
      return result
   }

   function makeArrReact(arr) {
      let result = []
      for(let i = 0; i < arr.length; i++){
         if(arr[i].props.type === 'Pet React'){
            result.push(arr[i])
         }
      }
      return result
   }

   function handleClick(e) {
      var foo = document.querySelectorAll(".nostyles");
      for (var i = 0; i < foo.length; i++) {
        foo[i].classList.remove("active");
      }
      e.currentTarget.classList.add("active");
    };

   function All(){
      return arr
   }

   function Alllandings(){
      let result = makeArrL(arr)
      return result
   }

   function AllJs(){
      let result = makeArrJs(arr)
      return result
   }

   function AllReact(){
      let result = makeArrReact(arr)
      return result
   }

   function Navigation(){
      return (       
      <div className="port__inner">
         <div className="categories">
            <Link className='nostyles active' to="All" onClick={handleClick}>
               <div className="category">All</div>
            </Link>     
            <Link className='nostyles' to="Landings" onClick={handleClick}>
               <div className="category">Landings</div>
            </Link>
            <Link className='nostyles' to="PetJS" onClick={handleClick}>
               <div className="category">Pet JS projects</div>
            </Link>             
            <Link className='nostyles' to="PetReact" onClick={handleClick}>
               <div className="category">Pet React projects</div>
            </Link>
         </div>
         <div className="content">
            <Outlet />
         </div>
      </div>             
      )
   }

   return (
      <section className="section portfolio">
         <div className="container">
            <Topic name={'p'} text={'My latest works'}/>
               <Routes >
                  <Route exact path="/" element={<Navigation/>}>
                     <Route path="/" element={<All/>}/>
                     <Route path="All" element={<All/>}/>
                     <Route path="Landings" element={<Alllandings/>}/>
                     <Route path="PetJS" element={<AllJs/>}/>
                     <Route path="PetReact" element={<AllReact/>}/>
                  </Route>
               </Routes>
         </div>
      </section>
   );
};

export default Portfolio;