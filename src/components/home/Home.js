import React from 'react'
import './Home.css';

import Technical from '../technical/Technical';
import Vision from '../vision/Vision';
import Contact from '../contact/Contact';


function Home() {
  return (
    <>
    <div className='container-fluid' id='hometxt'>
        <div className='homeText'>
          <h4>hello there i'm...</h4>
          <h1>Archford N</h1>
          <h4>front-end  <span>Software Engineer</span> </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             <button>see my work</button>
        </div>
    </div>
  <Technical></Technical>
  <Vision></Vision>
  <Contact></Contact>
 
    </>
  )
}

export default Home