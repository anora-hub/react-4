import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';


const Students = () => {
const [Students , SetStudents]= useState([]);
const [loading, setLoading] = useState(true)
const [searchValue , setSearchValue ]= useState("")


useEffect(()=>{
 async function getAllStudents(){
    try{
        let res = await axios.get(`https://69207def31e684d7bfcd401b.mockapi.io/students?LastName=${searchValue}`)
        SetStudents(res.data)
        setLoading(false)
    }catch(err){
console.log(err);

    }
}
getAllStudents()
},[searchValue])



  return (
      loading ? <div className=' flex items-center justify-center flex-col h-screen  text-red-600 animate-bounce text-[24px]' >Loading...</div> : 
      <div>
        <input onChange={(e)=> setSearchValue(e.target.value)  } className='border-[2px] border-[orangered] p-[10px]  text-[18px] fond-bold  text-black mt-[30px] ml-[70px] w-[1600px] rounded-[10px]' type="search" placeholder='Studentlarni qidirish' />
              <div className='grid grid-cols-4 gap-5 p-5 container mx-auto'>
                  {
                      Students.map((el) => (
                          <div key={el.id} className='border-[1px] border-[black]/30 max-w-[300px] w-full h-[440px] rounded-[20px] mr-auto ml-auto block'>
                              <Link to={`/students/${el.id}`}>
                                  <div className="w-[80px] h-[80px] rounded-full overflow-hidden mx-auto mt-[10px]">

                                      <img
                                          src={el.avatar}
                                          alt=""
                                          className="w-full h-full object-cover"
                                      />
                                  </div>
                             </Link>
                              <h1 class="text-center pt-[7px] font-[600]">{el.LastName}</h1>
                              <div class="flex gap-[5px] ml-auto mr-auto items-center justify-center pt-[10px]">
                                  <button class="border border-[black]/20 bg-[black]/20 px-[20px] rounded-[10px]">
                                      grade {el.grade}
                                  </button>
                                  <h1>{el.age}</h1>
                              </div>

                              <div class="flex gap-[180px] justify-center items-center pt-[10px]">

                                  <div class="flex items-center gap-[3px]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="yellow"
                                          class="lucide lucide-star h-4 w-4">
                                          <path d="M11.5 2.3a.5.5 0 0 1 .95 0l2.3 4.7a2.1 2.1 0 0 0 1.6 1.16l5.17.75a.5.5 0 0 1 .29.9l-3.73 3.64a2.1 2.1 0 0 0-.61 1.88l.88 5.14a.5.5 0 0 1-.77.56l-4.62-2.43a2.1 2.1 0 0 0-1.97 0l-4.62 2.43a.5.5 0 0 1-.77-.56l.88-5.14a2.1 2.1 0 0 0-.61-1.88L2.16 9.8a.5.5 0 0 1 .29-.9l5.16-.75a2.1 2.1 0 0 0 1.6-1.16z" />
                                      </svg>
                                      <h1>{el.rating}</h1>
                                  </div>

                                  <div class="flex items-center gap-[3px]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                          class="lucide lucide-coins h-4 w-4 text-yellow-500">
                                          <circle cx="8" cy="8" r="6"></circle>
                                          <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                                      </svg>
                                      <h1>{el.coins || 0}</h1>
                                  </div>
                              </div>

                              <div class="space-y-2 mb-4 pt-[40px] ml-[20px]">

                                  <div class="flex items-center gap-2 text-sm">
                                      📞 <span>{el.phone}</span>
                                  </div>

                                  <div class="flex items-center gap-2 text-sm">
                                      ✉️ <span>{el.email}</span>
                                  </div>

                                  <div class="flex items-center gap-2 text-sm">
                                      🚀 <span>@{el.telegram}</span>
                                  </div>

                                  <div class="flex items-center gap-2 text-sm">
                                      🔗 <span>{el.Linkedin}</span>
                                  </div>
                              </div>


                              <div class="flex gap-[20px] mt-[30px] justify-center">
                                  <button onclick="editStudent('${el.id}')"
                                      class="bg-[white] text-white px-[40px] py-[8px] rounded-md  hover:bg-[black]">Edit</button>

                                  <button onclick="deleteStudent('${el.id}')"
                                      class="bg-[white]  px-[40px] py-[8px] text-white px-3 rounded-md  hover:bg-[red] ">Delete</button>
                              </div>





                          </div>
                      ))
                  }
              </div>
      </div>
  )
}

export default Students


   