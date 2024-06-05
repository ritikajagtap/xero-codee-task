import React, { FormEvent, useState } from "react";
import appwriteService from "@/appwrite/config"
import useAuth from "@/context/useAuth"
// import Link from "next/link";
import { useRouter } from "next/navigation";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';


const Login = () => {
    const defaultTheme = createTheme();

    const router = useRouter();
    const { setAuthStatus } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("");
    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const session = await appwriteService.login(formData);
            if (session) {
                setAuthStatus(true);
                router.push("profile");
            }
        } catch (error: any) {
            setError(error.message)
        }
    }
    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
            <Box style={{background: 'linear-gradient(180deg, #87CEFA	10%, #FFFFFF 90%)', height: '100vh', // Full viewport height
    width: '100%',}}>
                <Container component="main" maxWidth="xs"  sx={{ border: '2px solid white', borderRadius: '16px', p:4, bgcolor:"white"}}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                       
                        <Typography component="h1" variant="h5">
                            Hello!
                        </Typography>
                        <Divider sx={{ m: '1rem' }}> Login to your Account</Divider>
                        <Box component="form" noValidate onSubmit={login}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                                }
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
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        password: e.target.value,
                                    }))
                                }
                            />
                            <Grid container alignItems="center"
                                justifyContent="center">
                                <Typography variant="subtitle1" gutterBottom>
                                    or
                                </Typography>
                            </Grid>

                            <Grid container spacing={2}>
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
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
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
export default Login;