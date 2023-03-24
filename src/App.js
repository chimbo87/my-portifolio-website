
import About from './components/aboutMe/About';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Project from './components/myProjects/Project';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    
      <Navbar></Navbar>

          <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/project' element={<Project/>}/>
          </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
