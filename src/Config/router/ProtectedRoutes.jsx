import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseconfig';
import { onAuthStateChanged } from 'firebase/auth';
import { Box, CircularProgress } from '@mui/material';

const ProtectedRoutes = ({component}) => {

    const navigate = useNavigate();
    const [isUser ,setIsUser] = useState(false)
    
        onAuthStateChanged(auth , (user) => {
            if(!user) {
                navigate("/login");
                return
            }
            setIsUser(true);
        })


  return (
    <>
    {isUser ? component :  <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <CircularProgress sx={{ color: "#ffa726" }} size={40} />
      </Box>
  }
    </>
  )
  
}

export default ProtectedRoutes