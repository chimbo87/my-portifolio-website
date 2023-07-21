import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../header/Navbar'

function Rootlayout() {
  return (
    <div>
         <div>
                
                <Navbar/>
            </div>
         <main>
                <Outlet/>
            </main>
    </div>
  )
}

export default Rootlayout