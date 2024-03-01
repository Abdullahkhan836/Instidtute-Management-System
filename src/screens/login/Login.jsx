import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../../Config/firebase/firebsemethod';
import CircularProgress from '@mui/material/CircularProgress';



const defaultTheme = createTheme();

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [loader, setLoader] = useState(false)


  const loginBtn = {
    height: "2.5rem",
    mt: 3, mb: 2,
    backgroundColor: "#ffa726",
    "&:hover": {
      backgroundColor : "#fb8c00"
    }
  }


  // login user anf getting data from firebase//
  function handleSubmit(event) {
    event.preventDefault();
    if (email && password === "") {
      alert("All fields are required")
      return
    }
    setLoader(true)

    loginUser({
      email,
      password
    })
      .then((res) => {

        if (res.type === "student") {
          console.log(res);
          navigate("/studentdashboard");
        } else {
          navigate("/admin");
        }
      })
      .catch((errors) => {
        console.log(errors);
      });

  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#ffa726' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}

            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={loginBtn }
            >
              {loader ? <CircularProgress sx={{ color: "white" }} size={20} /> : 'Login'}

            </Button>
            <Grid container>
             
              <Grid item>
                <Link className='text-decoration-none  ' variant="body2" to='/'>
                  {<h5 className='mt-3 text-black '>Don't have an account? Sign Up</h5>}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>

      </Container>
    </ThemeProvider>
  );
}