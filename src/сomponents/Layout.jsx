import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
       <Sidebar/>
       <main className='pl-[370px] pt-[5px]' >
        <Outlet/>
       </main>
    </>
  )
}

export default Layout