import React, { useEffect, useState } from 'react'

import { Avatar, Box, IconButton } from '@mui/material'
import { getAllDataWithQuery } from '../../../Config/firebase/firebsemethod'
import "./allstudents.css"
import { Container, Row, Col } from "react-bootstrap";
import Loader from '../../../Components/Loader'
import DeleteIcon from "@mui/icons-material/Delete";


const Allstudents = () => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = useState(true);

   // getting users from firebase//
 useEffect(()=>{
  getAllDataWithQuery("users")
  .then((res)=>{
    console.log(res);
    setLoading(false)
    setData(res)
  }).catch((error)=>{
     console.log(error);
  })
 })
 function capitalizeWords(str) {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(' ');
}


  return (
   <>
     <>
      <Container className="mt-3">
        <Row>
          <h1 className="mb-5 fw-bold">All Students</h1>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Loader />
            </Box>
          ) : (
            data && data.map((value, ind) => (
                <Col
                  xs={12}
                  md={{ offset: 1, span: 10 }}
                  className="studentInfo"
                  key={ind}
                  onClick={() => handleColClick(value.uid)}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <Avatar
                        alt="Remy Sharp"
                        src={value.image}
                        sx={{ width: 50, height: 50, margin: "0px 19px" }}
                      />
                      <h4>
                        {capitalizeWords(value.firstName)} &nbsp;
                        {capitalizeWords(value.lastName)}
                      </h4>
                    </div>
                    <IconButton aria-label="delete" color="white">
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </Col>
              ))
          )}
        </Row>
      </Container>
    </>
   </>
  )
}

export default Allstudents