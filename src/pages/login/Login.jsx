import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({setIsAuth}) => {

const[phone, setPhone]=useState("");
const[password , setPassword]= useState("")
const navigate = useNavigate();

console.log(setIsAuth);

function logine(e){
    e.preventDefault()
    if(phone === "+998994468451" && password === "anora2009"){
        setIsAuth(localStorage.setItem("auth" , true))
navigate("/teachers")
         toast.success("Siz tizimga muvaffaqiyatli kirdingiz");
    }else{
        toast.error("Login yoki parol ");
    }
}

    return (
        <div className='flex items-center justify-center flex-col bg-gray-300 h-screen '>
            <div className='flex items-center '>
                <form onSubmit={logine} className='max-w-[500px] flex h-full  flex-col gap-5 w-full p-5 rounded bg-blue-300 '>
                    <h1 className='text-white text-[24px] font-bold text-center'>Login va telifon raqam kiriting</h1>
                    <input onChange={(e)=> setPhone(e.target.value) } className='border-[2px] border-[orangered] text-[orangered] rounded p-[10px] ' type="text" placeholder='telfon raqamingiz' />
                    <input onChange={(e) => setPassword(e.target.value)} className='border-[2px] border-[orangered] text-[orangered] rounded p-[10px] ' type="password" placeholder='parolni kiriting' />
                    <button type='submit' className='border-[2px] border-[orangered] text-white text-[18px] fond-bold rounded p-[10px] bg-[orangered]'>Login</button>
                </form>
                <img className='max-w-[500px] w-full  ' src="https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW4lMjBwYWdlfGVufDB8fDB8fHww" alt="" />
            </div>
        </div>
    )
}

export default Login