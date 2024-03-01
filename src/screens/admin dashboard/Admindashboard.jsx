import React from 'react'
import Allstudents from './allStudents/Allstudents'
import Allcourses from './allCourse/Allcourses'
import Addcourse from './addCourse/Addcourse'
import { Route, Routes } from 'react-router-dom'
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MiniDrawer from '../../Components/drawer/Dashboard'
import EnrolledStudents from './singlecourse/EnrolledStd'

const Admindashboard = () => {
  return (
    <Box>
      <MiniDrawer className='bg-black ' screens={
        // nested routes//
         <Routes>
         <Route path='/' element={<Addcourse />} />
         <Route path='/allcourses' element={<Allcourses />} />
         <Route path='/allstudents' element={<Allstudents />} />
         <Route path="/allcourses/course/:id" element={<EnrolledStudents />} />

       </Routes>
}/>
    </Box>
    
  )
}

export default Admindashboard