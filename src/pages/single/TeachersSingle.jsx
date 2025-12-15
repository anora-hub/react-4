import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function TeachersSingle() {
  const { id } = useParams()
  const [teacher, setTeacher] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getTeacher() {
      try {
        const res = await axios.get(
          `https://69207def31e684d7bfcd401b.mockapi.io/teachers/${id}`
        )
        setTeacher(res.data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    getTeacher()
  }, [id])

  if (loading) {
    return <div className="flex items-center justify-center flex-col h-screen  text-red-600 animate-bounce text-[24px]">Loading...</div>
  }

  if (!teacher) {
    return <div className="p-6 text-center">Teacher not found</div>
  }

  return (
    <div className="mt-6 flex flex-col xl:flex-row gap-6">
      {/* LEFT SIDE */}
      <div className="w-full xl:max-w-[370px] bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-gray-200 w-[120px] h-[120px] rounded-full p-1">
            <img
              src={teacher.avatar}
              alt="teacher"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <h1 className="text-xl font-bold">
            {teacher.firstName} {teacher.lastName}
          </h1>

          <p className="bg-gray-200 px-3 py-1 rounded-lg text-sm">
            Biology
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <div className="flex justify-between">
            <p>Age</p>
            <p>{teacher.age} y</p>
          </div>

          <div className="flex justify-between">
            <p>Experience</p>
            <p>{teacher.salary}</p>
          </div>

          <div className="flex justify-between">
            <p>Gender</p>
            <p>{teacher.gender}</p>
          </div>

          <div className="flex justify-between items-center">
            <p>Rating</p>
            <p>{teacher.reting}</p>
          </div>
        </div>

        <button className="mt-6 w-full bg-black text-white py-2 rounded-md">
          Edit Profile
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-bold mb-4">Contact Info</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-3 rounded-lg">
            <p className="text-sm text-gray-500">Phone</p>
            <p>{teacher.phone}</p>
          </div>

          <div className="border p-3 rounded-lg">
            <p className="text-sm text-gray-500">Email</p>
            <p>{teacher.email}</p>
          </div>

          <div className="border p-3 rounded-lg">
            <p className="text-sm text-gray-500">Telegram</p>
            <p>{teacher.telegram}</p>
          </div>

          <div className="border p-3 rounded-lg">
            <p className="text-sm text-gray-500">Linkedin</p>
            <p className="truncate">{teacher.Linkedin}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeachersSingle


