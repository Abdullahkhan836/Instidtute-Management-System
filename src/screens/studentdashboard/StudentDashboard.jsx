import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import MenuAppBar from './Appbar';
import StudentProfile from './student';

const StudentDashboard = () => {
  




  return (
    <Box >
      <MenuAppBar />
      <StudentProfile/>
    </Box>
  )
}

export default StudentDashboard