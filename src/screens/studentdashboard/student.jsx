import React, { useEffect, useState } from "react";
// import { getData } from "../../Config/Firebase/firebasemethods";
import { Box } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import CreateIcon from "@mui/icons-material/Create";
import { auth, db } from "../../Config/firebase/firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import Loader from "../../Components/Loader";
import { getData } from "../../Config/firebase/firebsemethod";
const StudentProfile = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  


useEffect(()=>{
  
  gettingData()
 

}, [])

async function gettingData() {
  const id = auth.currentUser.uid
  console.log("id",id)
  const q = query(
    collection(db, "users"),
    where("uid", "==",id)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    setData(doc.data());
    setLoading(false)
  });
}


  

  return (
    <>
      <Container className="mt-5   ">
        <Row>
          <Col md={{ offset: 2, span: 8 }}>
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "80vh",
                }}
              >
                <Loader  />
              </Box>
            ) : (
           
                <div className="d-flex justify-content-center ">
                  <div className="profile_card_wrap  p-5" style={{border : "8px solid #ffa726    "}} >
                  <img style={{width: "130px",height:"170px"}}  src={data.image} />
                  <div className="profile_text">
                    <div className="profile_social">
                      <h4 className="my-2">Profile Info</h4>
                    </div>
                    <div className="profile_sub_text">
                      <p className="fw-bold ">
                        Name :{" "}
                        <span>
                          {" "}
                          {data.firstName} {data.lastName}{" "}
                        </span>
                      </p>
                      <p className="fw-bold ">
                        Gender : <span>{data.genders}</span>
                      </p>
                      <p className="fw-bold ">
                        Email : <span>{data.email}</span>
                      </p>
                      <p className="fw-bold ">
                        Course :<span> {data.course}</span>
                      </p>
                    </div>
                  </div>
                </div>
                </div>
             
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StudentProfile;