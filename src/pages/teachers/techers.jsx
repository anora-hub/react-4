import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Await, Link } from 'react-router-dom';
import { toast } from 'react-toastify/unstyled';
import TeacherCard from '../../сomponents/TeacherCard';

const Teachers = () => {
  const [techers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true)
  const [teacherSearch, setTeachersSearch] = useState("")
  const [isOpenMadal, setIsOpenMadal] = useState(false)
  const [avatar, setAvatar] = useState("")
  const [LastName, setLastName] = useState("")
  const [science, setscience] = useState("")
  const [salary, setsalary] = useState("")
  const [age, setage] = useState("")
  const [reting, setreting] = useState("")
  const [phone, setphone] = useState("")
  const [email, setemail] = useState("")
  const [telegram, settelegram] = useState("")
  const [Linkedin, setLinkedin] = useState("")
  const [selected, setSelected] = useState(null)
  console.log(edit);


  async function addTeacher(e) {
    e.preventDefault()
    try {
      if (selected) {
        await axios.put(
          `https://69207def31e684d7bfcd401b.mockapi.io/teachers/${selected}`,
          { avatar, LastName, science, salary, age, reting, phone, email, telegram, Linkedin }
        )
      } else {
        await axios.post(
          "https://69207def31e684d7bfcd401b.mockapi.io/teachers",
          { avatar, LastName, science, salary, age, reting, phone, email, telegram, Linkedin }
        )
      }
      toast.success("O'qituvchi muvaffaqiyatli qo'shildi")
      setIsOpenMadal(false)
      setSelected(null)
      getAllTeachers()
      setIsOpenMadal(false)


      setAvatar("")
      setLastName("")
      setscience("")
      setsalary("")
      setage("")
      setreting("")
      setphone("")
      setemail("")
      settelegram("")
      setLinkedin("")



    } catch (err) {
      console.log(err)
    }
  }

  async function edit(id) {
    try {
      let res = await axios.get(`https://69207def31e684d7bfcd401b.mockapi.io/teachers/${id}`)
      setSelected(id)
      setAvatar(res.data.avatar)
      setLastName(res.data.LastName)
      setscience(res.data.science)
      setsalary(res.data.salary)
      setage(res.data.age)
      setreting(res.data.reting)
      setphone(res.data.phone)
      setemail(res.data.email)
      setLinkedin(res.data.Linkedin)



    } catch (err) {
      console.log(err);

    }
  }


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

  async function deleteteachers(id) {
    try {
      await axios.delete(`https://69207def31e684d7bfcd401b.mockapi.io/teachers/${id}`)
      toast.success("Teachers muvaffaqiyatli o'chirildi ")
      getAllTeachers()

    }
    catch (err) {
      console.log(err);

    }

  }


  return (

    loading ? <div className=' flex items-center justify-center flex-col h-screen  text-red-600 animate-bounce text-[24px]'>Loading...</div> :
      <div >
        <div className='flex gap-[50px] items-center mt-[30px] ml-[70px]'>
          <input onChange={(e) => setTeachersSearch(e.target.value)} className='border-[2px] border-[orangered] p-[10px]  text-[18px] fond-bold  text-black   w-[600px] rounded-[10px]' type="search" placeholder='Studentlarni qidirish' />
          <button onClick={() => setIsOpenMadal(true)} className='bg-blue-600 text-white p-[10px] rounded-[10px] text-[18px]  curcor-pointer '>
            O'qituvchi qo'shish
          </button>
        </div>


        {
          isOpenMadal ?
            <div onClick={(() => {
              setIsOpenMadal(false), setSelected(null), setAvatar("")
              setLastName("")
              setscience("")
              setsalary("")
              setage("")
              setreting("")
              setphone("")
              setemail("")
              settelegram("")
              setLinkedin("")
            })} class="fixed bg-black/10  backdrop-blur-sm top-0 left-0 flex items-center   justify-center z-40 w-full h-full   ">
              <form onSubmit={addTeacher} onClick={(e) => e.stopPropagation()} class="  max-w-md mx-auto bg-[black]/70 mb-[60px] p-[40px]  rounded-[10px ] rounded-[10px]">
                <div class="relative z-0 w-full mb-5 group">
                  <input type=""
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-[white] appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                    placeholder=" " />
                  <label for="floating_email"
                    class="absolute text-sm text-[white] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Avatar</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input type="name" id="floating_email"
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-[white] appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                    placeholder=" " />
                  <label for=""
                    class="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">LastName</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input type="text" id="floating_email"
                    value={science}
                    onChange={(e) => setscience(e.target.value)}
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-[white] appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                    placeholder=" " />
                  <label for=""
                    class="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Sciance</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input type="name" id="floating_email"
                    value={salary}
                    onChange={(e) => setsalary(e.target.value)}
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-[white] appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                    placeholder=" " />
                  <label for=""
                    class="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Salory</label>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-5 group">
                    <input type="name" name="floating_first_name" id="floating_first_name"
                      value={age}
                      onChange={(e) => setage(e.target.value)}
                      class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-[white] appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                      placeholder=" " required />
                    <label for="floating_first_name"
                      class="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">age</label>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input type="name" name="floating_first_name" id="floating_first_name"
                      value={reting}
                      onChange={(e) => setreting(e.target.value)}
                      class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-[white] appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                      placeholder=" " required />
                    <label for="floating_first_name"
                      class="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">rating</label>
                  </div>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_phone" id="floating_phone"
                      value={phone}
                      onChange={(e) => setphone(e.target.value)}
                      class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-[white] appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                      placeholder=" " />
                    <label for=""
                      class="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone</label>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_company" id="floating_company"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-[white] appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                      placeholder=" " required />
                    <label for="floating_company"
                      class="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">email</label>
                  </div>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="" id="floating_phone"
                      value={telegram}
                      onChange={(e) => settelegram(e.target.value)}
                      class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-[white] appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                      placeholder=" " required />
                    <label for=""
                      class="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">telegram</label>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_company" id="floating_company"
                      value={
                        Linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-[white] appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                      placeholder=" " />
                    <label for="floating_company"
                      class="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">linkedin</label>
                  </div>
                </div>
                <button id="btn" type="submit"
                  class="text-white bg-[blue] box-border border border-[blue] rounded-[10px] hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">{selected ? "Tahrirlash" : "Qo'shish"}</button>
              </form>
            </div> : ""
        }









        < div className='grid grid-cols-4 gap-6 p-5 container mx-auto' > {
          techers.map((el) => (

            <TeacherCard {...el} edit={edit} setSelected={setSelected} setIsOpenMadal={setIsOpenMadal} deleteteachers={deleteteachers} />
          ))
        }</div >
      </div>

  )
}

export default Teachers



