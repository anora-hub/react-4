import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'


const Students = () => {
const [Students , SetStudents]= useState([]);
const [loading, setLoading] = useState(true)
useEffect(()=>{
 async function getAllStudents(){
    try{
        let res = await axios.get("https://69207def31e684d7bfcd401b.mockapi.io/students")
        SetStudents(res.data)
        setLoading(false)
    }catch(err){
console.log(err);

    }
}
getAllStudents()
},[])



  return (
      loading ? <div className=' flex items-center justify-center flex-col h-screen  text-red-600 animate-bounce text-[24px]' >Loading...</div> : 
      <div className='grid grid-cols-4 gap-5 p-5 container mx-auto'>
          {
              Students.map((el) => (
                  <div className='max-w-[400px] w-full rounded bg-gray-400'>
                      <img src={el.avatar} alt="" />
                      <h1>name:{el.LastName}</h1>
                      <p>age: {el.age}</p>
                      <p>coins{el.coins}</p>
                      <p>reting:{el.rating}</p>
                      <p>phone:{el.phone}</p>
                      <p>id:{el.id}</p>
                  </div>
              ))
          }
      </div>
  )
}

export default Students


   