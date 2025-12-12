import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Teachers = () => {
  const [techers, setTeachers] = useState([]);

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function getAllTeachers() {
      try {
        let res = await axios.get("https://69207def31e684d7bfcd401b.mockapi.io/teachers")

        setTeachers(res.data)
        setLoading(false)

      } catch (err) {
        console.log(err);

      }
    }
    getAllTeachers()
  }, [])


  return (
    
      loading?<div className=' flex items-center justify-center flex-col h-screen  text-red-600 animate-bounce text-[24px]'>Loading...</div> :
       < div className='grid grid-cols-4 gap-6 p-5 container mx-auto' > {
        techers.map((el) => (
          <Link to={`/teachers/${el.id}`} className='max-w-[400px] w-full rounded bg-gray-400'>
            <img src={el.avatar} alt="" />
            <h1>name:{el.name}</h1>
            <p>age: {el.age}</p>
            <p>profession:{el.Profession}</p>
            <p>reting:{el.reting}</p>
            <p>phone:{el.phone}</p>
            <p>id:{el.id}</p>
          </Link>
        ))
      }</div >

  )
}

export default Teachers



  