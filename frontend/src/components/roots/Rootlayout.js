import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from '../header/Navbar'

function Rootlayout() {
  return (
    <div>
         <div>
                
                <Navbar/>
                <ScrollRestoration/>
            </div>
         <main>
                <Outlet/>
            </main>
    </div>
  )
}

export default Rootlayout