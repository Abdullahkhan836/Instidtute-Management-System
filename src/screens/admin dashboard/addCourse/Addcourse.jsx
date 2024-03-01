import React, { useRef, useState } from 'react'
import Textfields from '../../../Components/textfields/Textfields'
import { Box, TextField, MenuItem, Button, Typography } from '@mui/material'
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from '../../../Config/firebase/firebaseconfig';


const Addcourse = () => {


  const days = [
    {
      value: 'MWF',
      label: 'MWF',
    },
    {
      value: 'TTS',
      label: 'TTS',
    }


  ];

  //getting value from fields//

  const [daysOf, setDaysOf] = useState('')
  const [course, setCousrse] = useState('')
  const [teacher, setTeacher] = useState('')



  // sending data to firebase//
  async function sendingData(event) {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "CourseData"), {
        days: daysOf,
        course,
        teacher
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }


  }



  return (
    <>
      <Typography className='d-flex justify-content-center mt-5 ' sx={{ fontFamily: "Poppins" }} variant='h5'>"Welcome, Admin! Empower learners by adding new courses with ease."
      </Typography>
      <Box className='d-flex justify-content-center    ' sx={{ marginTop: "80px" }}>


        <form onSubmit={sendingData} >
          <TextField onChange={(event) => setCousrse(event.target.value)} type='text' sx={{ width: "500px", margin: "10px", }} required id='course' label='Course Name' variant="outlined" />

          <TextField
            id="outlined-select-Days"
            select
            label="Select Days"
            sx={{ width: "500px", margin: "10px" }}
            onChange={(event) => setDaysOf(event.target.value)}
          >
            {days.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <TextField onChange={(event) => setTeacher(event.target.value)} type='text' sx={{ width: "1020px", margin: "10px", marginTop: '15px' }} required id="teacher" label="Teacher Name" variant="outlined" />
          <br />
          <Button sx={{
            margin: '10px',
            marginTop: '15px',
            fontSize: '16px',
            bgcolor: "#ffa726", "&:hover": {
            backgroundColor: "#fb8c00"
            }
          }} variant="contained" type='submit'>Add Course</Button>
        </form>
      </Box>

    </>
  )
}

export default Addcourse