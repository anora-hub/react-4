import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Students from './pages/students/students'
import Teachers from './pages/teachers/techers'
import Layout from './сomponents/Layout'
import TeachersSingle from './pages/single/TeachersSingle'
import Login from './pages/login/Login'
import StudentsSingle from './pages/SingleStudent/StudentsSingle'

const App = () => {
  const[isAuth ,setIsAuth]= useState(localStorage.getItem("auth") )
  return (
    <BrowserRouter>
      <Routes>
        < Route path="/" element={< Login setIsAuth={setIsAuth}/> }/>
        <Route element={(localStorage.getItem("auth") || false) ?<Layout/> : <Navigate to="/" />}>
          < Route path='teachers' element={< Teachers />} />
          < Route path='teachers/:id' element={< TeachersSingle />} />
          < Route path='students' element={< Students />} />
          < Route path='students/:id' element={<StudentsSingle />} />
     </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
 