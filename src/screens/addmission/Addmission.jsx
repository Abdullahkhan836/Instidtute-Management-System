import { TextField, MenuItem, Button, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { addImageToStorage, getAllData,  signUpUser } from '../../Config/firebase/firebsemethod';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { serverTimestamp } from 'firebase/firestore';
import Loader from '../../Components/Loader';
import { CircularProgress } from '@mui/material'


const Addmission = ({component}) => {

  let [data, setData] = useState(null)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAllData('CourseData')
      .then((res) => {
        setData(res)
      }).catch((error) => {
        console.log(error);
      })
  }, [])


  const gender = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Femail',
      label: 'Female',
    }


  ];
  const registerBtn = {
    width: "250px",
    margin: "12px",
    backgroundColor: '#ffa726 ',
    color: "white",
    '&:hover': {
      backgroundColor: '#fb8c00 ',
    },
    // border: "1px solid black"
  }

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [course, setCourse] = useState('')
  const [genders, setGenders] = useState('')
  const [address, setAddress] = useState('')
  const image = useRef()



  async function sendingData(event) {

    event.preventDefault()
    setLoading(true)
    const fileName = image.current.files[0];

    const imageUrl = await addImageToStorage({
      file: fileName,
      email: email,
    });
    signUpUser({
      firstName,
      lastName,
      email,
      course,
      genders,
      address,
      password,
      type: "student",
      rollNumber: Math.ceil((Math.random() * 10000)),
      timeStamp: serverTimestamp(),
      image: imageUrl
    }, "Users").then((res) => {
      if (res) {
        navigate("/studentdashboard")
      }

    }).catch((error) => {
      console.log(
        error
      );
    })


  }





  return (
    <Box className="container ">
      {data ? <Box className="" >
        <Typography variant='h3' sx={{ fontFamily: "Poppins" }} className='d-flex justify-content-center mt-3'>Addmission Form</Typography>
        <Box className='main w-100  m-3   p-3 ;
  ' >
          <form onSubmit={sendingData}  >
            <TextField onChange={(event) => setFirstName(event.target.value)} type='text' sx={{ width: "500px", margin: "10px", }} required id='firstName' label='First Name' variant="outlined" />
            <TextField onChange={(event) => setLastName(event.target.value)} type='text' sx={{ width: "500px", margin: "10px", }} required id='lastName' label='Last Name' variant="outlined" />


            <br />
            <TextField onChange={(event) => setEmail(event.target.value)} type='email' sx={{ width: "500px", margin: "10px", }} required id='email' label='Email' variant="outlined" />
            <TextField onChange={(event) => setPassword(event.target.value)} type='password' sx={{ width: "500px", margin: "10px", }} required id='password' label='Password' variant="outlined" />


            <br />
            <TextField
              id="outlined-select-courses"
              select
              label="Courses"
              sx={{ width: "500px", margin: "10px" }}
              onChange={(event) => setCourse(event.target.value)}
            >
              {data.map((option, index) => (
                <MenuItem key={index} value={option.course}>
                  {option.course}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-gender"
              select
              label="Gender"
              sx={{ width: "500px", margin: "10px" }}
              onChange={(event) => setGenders(event.target.value)}
            >
              {gender.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <TextField onChange={(event) => setAddress(event.target.value)} type='text' sx={{ width: "1020px", margin: "10px" }} required id="address" label="Address" variant="outlined" />

            <br />
            <TextField type='file' sx={{ width: "1020px", margin: "10px" }} required inputRef={image} id='profile-picture' >
            </TextField>
            <br />
            <div className='d-flex'>
              <Button type='submit' variant="contained" sx={registerBtn}>{loading ? <CircularProgress size={20} /> : 'Register'}</Button>


              <h4 >
                Already have an account?<Link to="/login"> Login here</Link>
              </h4 >
            </div>
          </form>

        </Box>

      </Box>
        : <Box className="d-flex justify-content-center align-items-center vh-100  "> <Loader /></Box>}
    </Box>
  )
}

export default Addmission