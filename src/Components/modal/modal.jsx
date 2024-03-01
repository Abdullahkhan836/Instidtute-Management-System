import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ActionAreaCard from '../card/card';
import { getAllData } from '../../Config/firebase/firebsemethod';
import CircularProgress from '@mui/material/CircularProgress';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [data ,setDate ] = React.useState([]);

    React.useEffect(() => {
        getAllData("users")
        .then((res)=>{
            console.log(res);
            setDate(res)
        }).catch(err=>{console.log(err)})
    }, [])
  
    return (
      <div>
        <div>
        {data.length > 0 ? data.map((item)=>{
                    return 
            }) : <Box className="d-flex justify-content-center align-items-center vh-100" >
                 <CircularProgress  size={40}/>
            </Box>}
        </div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          
               
            
            
          </Box>
        </Modal>
      </div>
    );
  }