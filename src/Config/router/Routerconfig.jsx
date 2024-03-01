import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addmission from '../../screens/addmission/Addmission'
import StudentDashboard from '../../screens/studentdashboard/StudentDashboard'
import Admindashboard from '../../screens/admin dashboard/Admindashboard'
import Login from '../../screens/login/Login'
import ProtectedRoutes from './ProtectedRoutes'



const Routerconfig = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Addmission />} ></Route>
            <Route path="admin/*" element={<ProtectedRoutes component={<Admindashboard />}/>} ></Route>
            <Route path="login"element={<Login />} ></Route>
            <Route path="studentdashboard"element={<ProtectedRoutes component={<StudentDashboard />}/>} ></Route>
            
            </Routes>      
      </BrowserRouter>
  )
}

export default Routerconfig