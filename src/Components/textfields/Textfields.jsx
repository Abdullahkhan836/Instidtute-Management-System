import { TextField } from '@mui/material'
import React from 'react'

const Textfields = (props ) => {
  return (
    <TextField type={props.type} sx={{width:"550px",margin:"10px",}}  required id={props.id} label={props.label} variant="outlined" />
    

  )
}

export default Textfields