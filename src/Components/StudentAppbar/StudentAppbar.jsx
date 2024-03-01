import { Box, Typography } from '@mui/material'
import React from 'react'

const StudentAppbar = () => {
  return (
    <Box className="d-flex justify-content-center">
    <Box sx={{ width: 1150, display: "flex", height: "90px",bgcolor:"black",padding:'px',marginBottom:"30px" }}>
    <Typography variant="h6" color="black" sx={{marginLeft:'15px',color:'white',marginTop:"25px",fontWeight:'50px'}}>
             Profile
         </Typography>
         <Typography sx={{marginLeft:'70px',color:'white',marginTop:"25px",fontWeight:'50px'}} variant="h6" color="black">
             Name
         </Typography>
         <Typography sx={{marginLeft:'205px',color:'white',marginTop:"25px",fontWeight:'50px'}} variant="h6" color="black">
             Course
         </Typography>
         <Typography sx={{marginLeft:'210px',color:'white',marginTop:"25px",fontWeight:'50px'}} variant="h6" color="black">
             Roll Number
         </Typography><Typography sx={{marginLeft:'210px',color:'white',marginTop:"25px",fontWeight:'50px'}} variant="h6" color="black">
             Delete
         </Typography>
     </Box>
    </Box>
  )
}

export default StudentAppbar