import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify/unstyled';


const Students = () => {
    const [Students, SetStudents] = useState([]);
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState("")
    const [isOpenMadel, setIsOpenModel] = useState(false)
    const [teachers, setTeachers] = useState([])
    const [avatar, setAvatar] = useState("")
    const [LastName, setLastName] = useState("")
    const [grade, setgrade] = useState("")
    const [coins, setcoins] = useState("")
    const [age, setage] = useState("")
    const [rating, setrating] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [telegram, settelegram] = useState("")
    const [Linkedin, setLinkedin] = useState("")
    const [teacherId, setTeacherId] = useState("")



    async function addStudent(e) {
        e.preventDefault()

        
        try {
            await axios.post(`https://69207def31e684d7bfcd401b.mockapi.io/teachers/${teacherId}/students`,
                {
                    avatar, LastName, coins, grade, age, rating, phone, email, telegram, Linkedin, teacherId
                }
            )

            toast.success("Student muvaffiqiyatli qoshildi")
            setIsOpenModel(false)
            
        } catch (err) {
            console.log(err);

        }
    }



    useEffect(() => {
        async function getTeachers() {
            try {
                let res = await axios.get("https://69207def31e684d7bfcd401b.mockapi.io/teachers")
                setTeachers(res.data)
                console.log(res.data);
                
            } catch (err) {
                console.log(err);

            }
        }
        getTeachers()
    }, [])

    useEffect(() => {
        async function getAllStudents() {
            try {
                let res = await axios.get(`https://69207def31e684d7bfcd401b.mockapi.io/students?LastName=${searchValue}`)
                SetStudents(res.data)
                setLoading(false)
            } catch (err) {
                console.log(err);

            }
        }
        getAllStudents()
    }, [searchValue])



    return (
        loading ? <div className=' flex items-center justify-center flex-col h-screen  text-red-600 animate-bounce text-[24px]' >Loading...</div> :
            <div>

                <div>

                    {
                        isOpenMadel ?
                            <div
                                onClick={() => setIsOpenModel(false)}
                                className="fixed bg-black/10  backdrop-blur-sm top-0 left-0 flex items-center   justify-center z-40 w-full h-full ">
                                <form onSubmit={addStudent} onClick={(e) => e.stopPropagation()} class="max-w-md mx-auto bg-[black]/70 p-[40px] rounded-[10px] mb-[60px]">


                                    <div class="relative z-0 w-full mb-5 group">


                                        <input type="text" id="avatar"
                                           onChange={(e) => setAvatar(e.target.value)}
                                            className="block py-2.5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-blue-500 peer"
                                            placeholder=" " />
                                        <label for="avatar"
                                            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Avatar
                                        </label>
                                    </div>


                                    <div className="relative z-0 w-full mb-5 group">


                                        <input type="text" id="lastname"
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="block py-2.5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-blue-500 peer"
                                            placeholder=" " />
                                        <label for="lastname"
                                            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Last Name
                                        </label>
                                    </div>

                                    <div className="relative z-0 w-full mb-5 group">


                                        <input type="text" id="lastname"
                                            onChange={(e) => setgrade(e.target.value)}
                                            className="block py-2.5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-blue-500 peer"
                                            placeholder=" " />
                                        <label for="lastname"
                                            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            grade
                                        </label>
                                    </div>


                                    <div className="relative z-0 w-full mb-5 group">

                                        <input type="email" id="salary"
                                            value={email}
                                            onChange={(e) => setemail(e.target.value)}
                                            className="block py-2.5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white focus:outline-none focus:border-blue-500 peer"
                                            placeholder=" " />
                                        <label for="salary"
                                            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            email
                                        </label>
                                    </div>


                                    <div className="relative z-0 w-full mb-5 group">
                                        <select
                                            name="science"
                                            className="border-b border-white px-3 py-2 w-full text-white"
                                            onChange={(e) => setTeacherId(e.target.value)}
                                        >

                                            {teachers?.map((el) => (
                                                <option key={el.id} className="text-black" value={el.id}>{el.LastName}</option>
                                            ))}
                                        </select>

                                    </div>


                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-5 group">
                                            <input type="number" id="age"
                                                value={age}
                                                onChange={(e) => setage(e.target.value)}
                                                className="block py-2.5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white peer focus:outline-none"
                                                placeholder=" " />
                                            <label for="age"
                                                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                Age
                                            </label>
                                        </div>
                                        <div className="relative z-0 w-full mb-5 group">


                                            <input type="number" id="phone"
                                                onChange={(e) => setphone(e.target.value)}
                                                className="block py-2.5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white peer focus:outline-none"
                                                placeholder=" " />
                                            <label for="phone"
                                                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                Phone
                                            </label>
                                        </div>

                                    </div>


                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-5 group">
                                            <input type="text" id="telegram"

                                                onChange={(e) => settelegram(e.target.value)}
                                                className="block py-2.5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white peer focus:outline-none"
                                                placeholder=" " />
                                            <label for="telegram"
                                                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                Telegram
                                            </label>
                                        </div>

                                        <div className="relative z-0 w-full mb-5 group">
                                            <input type="text" id="linkedin"

                                                onChange={(e) => setLinkedin(e.target.value)}
                                                className="block py-2.5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white peer focus:outline-none"
                                                placeholder=" " />
                                            <label for="linkedin"
                                                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                LinkedIn
                                            </label>
                                        </div>
                                    </div>


                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-5 group">
                                            <input type="text" id="telegram"
                                                value={rating}
                                                onChange={(e) => setrating(e.target.value)}
                                                className="block py-2.5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white peer focus:outline-none"
                                                placeholder=" " />
                                            <label for="telegram"
                                                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                reating
                                            </label>
                                        </div>

                                        <div className="relative z-0 w-full mb-5 group">


                                            <input type="text" id="linkedin"
                                                onChange={(e) => setcoins(e.target.value)}
                                                className="block py-2.5 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white peer focus:outline-none"
                                                placeholder=" " />
                                            <label for="linkedin"
                                                className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                coins
                                            </label>
                                        </div>
                                    </div>


                                    <button  type="submit"
                                        className="text-white bg-blue-600 border border-blue-600 mt-[30px] rounded-[10px] px-4 py-2.5 hover:bg-blue-700">
                                        Submit
                                    </button>

                                </form>
                            </div> : ""
                    }


                    <div className=''>
                        <div className='flex gap-[50px] items-center mt-[30px] ml-[70px] sm:flex-col mr-[130px]'>
                            <input onChange={(e) => setSearchValue(e.target.value)} className='border-[2px] border-[orangered] p-[10px]  text-[18px] fond-bold  w-full text-black ml-[70px] max-w-[600px]   rounded-[10px]' type="search" placeholder='Studentlarni qidirish' />
                            <button type='submit' onClick={() => setIsOpenModel(true)} className='bg-blue-600 text-white p-[10px] rounded-[10px] text-[18px]  curcor-pointer '>
                                O'quvchi qo'shish
                            </button>
                       </div>
                    </div>
                    <div className='grid xl:grid-cols-3  2xl:grid-cols-4 lg:grid-cols-2 gap-5 p-5 container mx-auto'>
                        {
                            Students.map((el, index) => (
                                <div key={index} className='border-[1px] border-[black]/30 max-w-[300px] w-full h-[440px] rounded-[20px] mr-auto ml-auto block'>
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
                                        <button onClick={() => editStudent('${el.id}')}
                                            class="bg-[white] text-white px-[40px] py-[8px] rounded-md  hover:bg-[black]">Edit</button>

                                        <button onClick={() => deleteStudent('${el.id}')}
                                            class="bg-[white]  px-[40px] py-[8px] text-white px-3 rounded-md  hover:bg-[red] ">Delete</button>
                                    </div>





                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}

export default Students


