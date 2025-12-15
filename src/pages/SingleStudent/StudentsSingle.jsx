import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const StudentsSingle = () => {
    const { id } = useParams()
    const [student, setStudent] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getStudent() {
            try {
                const res = await axios.get(
                    `https://69207def31e684d7bfcd401b.mockapi.io/students/${id}`
                )
                setStudent(res.data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }

        getStudent()
    }, [id])

    if (loading) {
        return <div className="flex items-center justify-center flex-col h-screen  text-red-600 animate-bounce text-[24px]">Loading...</div>
    }

    if (!student) {
        return <div className="p-6 text-center">Student not found</div>
    }

    return (
        <div className="mt-6 flex flex-col xl:flex-row gap-6">
            {/* LEFT */}
            <div className="w-full xl:max-w-[370px] bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-gray-200 w-[120px] h-[120px] rounded-full p-1">
                        <img
                            src={student.avatar}
                            alt="student"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>

                    <h1 className="text-xl font-bold">
                        {student.firstName} {student.lastName}
                    </h1>

                    <p className="bg-gray-200 px-3 py-1 rounded-lg text-sm">
                        Student
                    </p>
                </div>

                <div className="flex flex-col gap-3 mt-6">
                    <div className="flex justify-between">
                        <p>Age</p>
                        <p>{student.age} y</p>
                    </div>

                    <div className="flex justify-between">
                        <p>Grade</p>
                        <p>{student.grade}</p>
                    </div>

                    <div className="flex justify-between">
                        <p>Gender</p>
                        <p>{student.gender}</p>
                    </div>

                    <div className="flex justify-between">
                        <p>Rating</p>
                        <p>{student.rating}</p>
                    </div>
                </div>

                <button className="mt-6 w-full bg-black text-white py-2 rounded-md">
                    Edit Profile
                </button>
            </div>

            {/* RIGHT */}
            <div className="w-full bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-bold mb-4">Contact Info</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Phone</p>
                        <p>{student.phone}</p>
                    </div>

                    <div className="border p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Email</p>
                        <p>{student.email}</p>
                    </div>

                    <div className="border p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Telegram</p>
                        <p>{student.telegram}</p>
                    </div>

                    <div className="border p-3 rounded-lg">
                        <p className="text-sm text-gray-500">LinkedIn</p>
                        <p className="truncate">{student.Linkedin}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentsSingle
