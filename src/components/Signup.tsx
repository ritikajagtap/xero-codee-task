"use client"
import appwriteService from "@/appwrite/config"
import useAuth from "@/context/useAuth"
// import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
const defaultTheme = createTheme();


const Signup = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  })
  const [error, setError] = useState("");
  const { setAuthStatus } = useAuth();
  const create = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const userData = await appwriteService.createUserAccount(formData);
      console.log(userData);
      if (userData) {
        setAuthStatus(true);
        router.push("/profile");
      }
    } catch (error: any) {
      setError(error.message);
    }
  }

  return (

    <div>
      <ThemeProvider theme={defaultTheme}>
      <Box style={{background: 'linear-gradient(180deg, #87CEFA	10%, #FFFFFF 90%)', height: '100vh',
    width: '100%',}}>
        <Container component="main" maxWidth="xs" sx={{border: '2px solid white', borderRadius: '16px', bgcolor:"white"}}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Hello!
            </Typography>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <Box component="form" noValidate onSubmit={create} sx={{ mt: 3 }}>
              <Divider sx={{ m: '1rem' }}> Create your Account</Divider>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="given-name"
                    name="name"

                    fullWidth
                    id="name"
                    label="First Name"
                    autoFocus
                    type="text"
                    placeholder="Full Name"

                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="given-name"
                    name="name"

                    fullWidth
                    id="lastName"
                    label="Last Name"
                    autoFocus
                    type="text"
                    placeholder="Last Name"

                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                  // value={formData.password}
                  // onChange={(e) =>
                  //   setFormData((prev) => ({
                  //     ...prev,
                  //     password: e.target.value,
                  //   }))
                  // }
                  />
                </Grid>
                <Grid container justifyContent="center" xs={12} >
                  <Typography variant="subtitle1" gutterBottom>
                    or
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button style={{ fontSize: '12px', color:"black" }} onClick={appwriteService.loginThroughGoogle} variant="outlined">Signup with Google <GoogleIcon></GoogleIcon></Button>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button style={{ fontSize: '12px', color:"black" }} onClick={appwriteService.loginThroughGithub} variant="outlined">Signup with Github <GitHubIcon></GitHubIcon></Button>
                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        </Box>
      </ThemeProvider>
    </div>
  )
}
export default Signup;