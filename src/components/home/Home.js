import React from 'react'
import './Home.css';
import visionImg from '../../assets/tools4.jpeg';

function Home() {
  return (
    <>
    <div className='container-fluid' id='hometxt'>
        <div className='homeText'>
          <h4>hello there i'm...</h4>
          <h1>Archford N</h1>
          <h4>front-end  <span>Software Developer</span> </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             <button>see my work</button>
        </div>
    </div>

    {/* <div className='container-fluid'>
         <div className='container'>
         <div class="row">
    <div class="col">
      <h1>Vision</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
           nulla pariatur. Excepteur sint occaecat cupidatat non
         proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="col">
    return <img src={visionImg} alt="visionImg" />
    </div>
    </div>
         </div>
    </div> */}
    </>
  )
}

export default Home