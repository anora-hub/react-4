import React, { useState } from 'react'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { PiChalkboardTeacherBold, PiStudentBold } from 'react-icons/pi';
import { RiMenuFold4Fill } from 'react-icons/ri';
import { NavLink, useNavigate } from 'react-router-dom'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {





    const navigate = useNavigate()
    function logout(){
        localStorage.removeItem("auth");
        navigate("/")
    }
    return (
        <>
            <ul className={` ${sidebarOpen ? "max-w-[350px]" : "max-w-[85px]"}  duration-300  flex flex-col gap-5 h-screen  bg-gray-200  w-full fixed top-0 left-0 p-5 z-30`}>
           <li className=''>
                    <h1 className={`  text-[32px] text-blue-600 font-bold transition-all duration-300  ${
                        sidebarOpen ? "block" : "hidden"}`}>Admin Panel</h1>
                 
           </li>
                <button onClick={()=> setSidebarOpen(!sidebarOpen)}    className=' absolute  top-[30px] cursor-pointer right-[-35px]'>
                    
                   {
                        sidebarOpen ? <AiOutlineMenuFold className='text-[30px]' />:
                            < AiOutlineMenuUnfold className='text-[30px]'  />
                   }
                </button>
                <li className='bg-blue-500 text-white rounded p-[10px] hover:bg-[red]  '>
                    
                    <NavLink className={`w-full h-full flex items-center gap-[8px] ${sidebarOpen ? "justify-start" : "justify-center"
                        }`}
                        to="/Teachers"
>
                        <PiChalkboardTeacherBold />
                        <span className={`${sidebarOpen? "" : "hidden"}`}> Teachers </span> 
                      </NavLink>
                   
                </li>
                <li className='bg-blue-500 text-white rounded p-[10px] hover:bg-[red] '>
                   
                    <NavLink className={`w-full h-full flex items-center gap-[8px]  ${sidebarOpen ? "justify-start" : "justify-center"}`} to={"/Students"}>
                        <PiStudentBold />
                        <span className={`${sidebarOpen ? "" : "hidden"}`}>Students</span>
                     </NavLink>
                   
                </li>
                <li className='bg-blue-500 text-white rounded p-[10px]  hover:bg-[red]'>
                    
                    <button onClick={logout} className={`w-full h-full inline-block ${sidebarOpen ? "justify-left" : "justify-center"}`} to={"/Students"}>
                        <BiLogOut />
                        <span className={`${sidebarOpen ? "" : "hidden"}`}>Logout</span>
                    </button>
                   
                </li>
            </ul>

        </>
    )
}
console.log(Sidebar);


export default Sidebar