import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify/unstyled';

const Teachers = () => {
  const [techers, setTeachers] = useState([]);

  const [loading, setLoading] = useState(true)
  const[teacherSearch , setTeachersSearch]=useState("")

  async function getAllTeachers() {
    try {
      let res = await axios.get(`https://69207def31e684d7bfcd401b.mockapi.io/teachers?LastName=${teacherSearch}`)

      setTeachers(res.data)
      setLoading(false)

    } catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    
    getAllTeachers()
  }, [teacherSearch])

 async function deleteteachers(id){
try{
  await axios.delete(`https://69207def31e684d7bfcd401b.mockapi.io/teachers/${id}`)
  toast.success("Teachers muvaffaqiyatli o'chirildi ")
  getAllTeachers()
  
}
catch(err){
  console.log(err);
  
}

  }


  return (
    
      loading?<div className=' flex items-center justify-center flex-col h-screen  text-red-600 animate-bounce text-[24px]'>Loading...</div> :
     <div >
        <input onChange={(e)=>setTeachersSearch(e.target.value)}  className='border-[2px] border-[orangered] p-[10px]  text-[18px] fond-bold  text-black mt-[30px] ml-[70px] w-[1600px] rounded-[10px]' type="search" placeholder='Studentlarni qidirish' />
        < div className='grid grid-cols-4 gap-6 p-5 container mx-auto' > {
          techers.map((el) => (
           <div>
             
                <div key={el.id} class="border-[1px] border-[black]/30 max-w-[300px] w-full h-[440px] rounded-[20px] block mx-auto">
                <Link to={`/teachers/${el.id}`} className='max-w-[400px] w-full rounded '>
                  <div className="w-[80px] h-[80px] rounded-full overflow-hidden mx-auto mt-[10px]">
                    <img
                      src={el.avatar}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
              </Link>

                  <h1 class="text-center pt-[7px] font-[600]">{el.LastName}</h1>

                  <button class="border ml-auto bg-[black]/20 mr-auto block px-[20px] rounded-[10px]">
                    {el.science.name}
                  </button>

                  <div class="flex gap-[30px] justify-center pt-[9px]">
                    <div class="flex gap-[2px] items-center">
                      <svg class="text-[black] dark:text-gray-400 w-[16px] h-[16px]" xmlns=" http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                      </svg>
                      <p>{el.salary}</p>
                    </div>

                    <div class="flex gap-[2px] items-center">
                      <svg class="text-[black] dark:text-gray-400 w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                      <p> {el.age}y</p>
                    </div>
                  </div>

                  <div class="flex gap-[5px] justify-center items-center">
                    <svg class="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" stroke="yellow" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                      </path>
                    </svg>
                    <h1>{el.reting}</h1>
                  </div>

                  <div class="space-y-2 mb-4 pt-[40px] ml-[20px]">
                    <div class="flex items-center gap-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-4 w-4 flex-shrink-0 text-blue-500" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                      <span>{el.phone}</span>
                    </div>

                    <div class="flex items-center gap-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-4 w-4 flex-shrink-0 text-green-500" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                      <span>{el.email}</span>
                    </div>

                    <div class="flex items-center gap-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send h-4 w-4 flex-shrink-0 text-blue-400" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                      <span>@{el.telegram}</span>
                    </div>

                    <div class="flex items-center gap-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin h-4 w-4 flex-shrink-0 text-blue-600" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>

                      <span>{el.Linkedin}</span>
                    </div>
                  </div>

                  <div class="flex gap-[20px] mt-[30px] justify-center">
                    <button onClick="edit(${el.id})"
                      class="bg-[white] text-white px-[40px] py-[8px] rounded-md  hover:bg-[black]  ">Edit</button>

                    <button onClick={() => deleteteachers(el.id)}
                      class="bg-[white]  px-[40px] py-[8px] text-white px-3 rounded-md  hover:bg-[red]  ">Delete</button>
                  </div>
                </div>
             
             
           </div>
          ))
        }</div >
     </div>

  )
}

export default Teachers



  