import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
    function logout(){
        localStorage.removeItem("auth");
        navigate("/")
    }
    return (
        <>
         <ul className='flex flex-col gap-5 h-screen  bg-gray-200 max-w-[350px] w-full fixed top-0 left-0 p-5 z-30'>
           <li>
            <h1 className='text-[32px] text-blue-600 font-bold'>Admin Panel</h1>
           </li>
            <li className='bg-blue-500 text-white rounded p-[10px] '>
                    <NavLink className={"w-full h-full inline-block"} to={"/Teachers"}> Teachers  </NavLink>
                </li>
                <li className='bg-blue-500 text-white rounded p-[10px] '>
                    <NavLink className={"w-full h-full inline-block"} to={"/Students"}> Students</NavLink>
                </li>
                <li className='bg-blue-500 text-white rounded p-[10px] '>
                    <button onClick={logout} className={"w-full h-full inline-block"} to={"/Students"}>Logout</button>
                </li>
            </ul>

        </>
    )
}
console.log(Sidebar);


export default Sidebar