import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../../Config/firebase/firebaseconfig';
import { Col, Container, Row } from 'react-bootstrap';
import WestIcon from "@mui/icons-material/West";
import { Avatar, Box } from '@mui/material';
import "./singleCourse.css"
import Loader from '../../../Components/Loader';
import { getAllDataWithQuery } from '../../../Config/firebase/firebsemethod';

const EnrolledStudents = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
     getDataWithQuery("users", params.id)
     .then((res)=>{
        setData(res)
        setLoading(false)
     }).catch(err=>console.log(err))
      
},[])
 
  const getDataWithQuery = (colName , id) => {
    return new Promise(async (resolve, reject) => {
      const dataArr = []
      const q = query(
        collection(db, colName),
        where("course", "==", id)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const obj = { ...doc.data(), documentId: doc.id }
        dataArr.push(obj)
        resolve(dataArr);
      });
      reject("error occured")
    })
  }
 
  


  ;
  function capitalizeWords(str) {
    const words = str.split(' ');
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
  }
  return (
    <>

    {/* <div>singlepage {params.id}</div> */}
    <Container className='mt-3'>
      <Row>
      <h1><WestIcon onClick={() => navigate("/admin/allcourses")} sx={{cursor : 'pointer', margin : "0px 5px"}}/> Enrolled Students</h1>
      <Col md={{ offset: 1, span: 10 }} sm={12}>
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
    <div className="card my-3">
      <div className="card-header">
        <span className="title">{params.id}</span>
      </div>
      {data.length <= 0 ?(
        <>
        {setLoading(false)}
        <h6 className='p-5 fs-4 '>No students have enrolled in this course as of now.</h6>
        </>
      ) : (data.map((value) => (
        <div className="card-author studentCard" key={value.uid}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center w-5">
              <Avatar
                alt="User Pic"
                src={value.image}
                sx={{ width: 50, height: 50, margin: "0px 19px" }}
              />
              <h5>
                {capitalizeWords(value.firstName)}&nbsp;{capitalizeWords(value.lastName)}
              </h5>
            </div>
          </div>
        </div>)
      ))}
    </div>
  )}
</Col>

      </Row>
    </Container>
    </>
  )
}

export default EnrolledStudents

   