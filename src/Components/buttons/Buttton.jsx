import { Button } from '@mui/material'
import React from 'react'

const Buttton = () => {
  const btnSx = {
    width:"130px",
    margin:"25px",
    color:"white",
    backgroundColor:'black ',
    '&:hover':{
      backgroundColor:'#757575  ',
    },
    border:"1px solid black"
    // backgroundColor:"transparent",
    // color:'white'
  }
  
  return (
    <Button variant="contained"  sx={btnSx}>Submit</Button>


  )
}

export default Buttton