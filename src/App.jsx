import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Students from './pages/students/students'
import Teachers from './pages/teachers/techers'
import Layout from './сomponents/Layout'
import TeachersSingle from './pages/single/TeachersSingle'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
     <Route element={<Layout/>}>
          < Route path='teachers' element={< Teachers />} />
          < Route path='teachers/:id' element={< TeachersSingle />} />
          < Route path='students' element={< Students />} />
     </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
 