import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const[sidebarOpen, setSidebarOpen]=useState(true)
  return (
    <>
            
       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
       <main className='pl-[370px] pt-[5px]' >
        <Outlet  sidebarOpen={sidebarOpen}/>
       </main>
    </>
  )
}

export default Layout