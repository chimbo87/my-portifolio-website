import React from 'react'
import './Home.css';

import Technical from '../technical/Technical';
import Vision from '../vision/Vision';
import Contact from '../contact/Contact';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  return (
    <>
    <div className='container-fluid' id='hometxt'>
        <div className='homeText'>
          <h4>Hello i'm,</h4>
          <h1>Archford Nhanga</h1>
          <h4><span>Front-End   Software Engineer</span> </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             <button onClick={()=>{navigate("/project")}}>see my work</button>
        </div>
    </div>
  <Technical></Technical>
  <Vision></Vision>
  <Contact></Contact>
 
    </>
  )
}

export default Home