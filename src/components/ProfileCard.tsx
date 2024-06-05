"use client";
import appwriteService from "@/appwrite/config";
import { Models } from "appwrite";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import SportsVolleyballOutlinedIcon from '@mui/icons-material/SportsVolleyballOutlined';
import ViewCompactOutlinedIcon from '@mui/icons-material/ViewCompactOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import RotateRightOutlinedIcon from '@mui/icons-material/RotateRightOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Grid from '@mui/material/Grid';

const drawerWidth = 240;

const icons = [
    <GridViewOutlinedIcon />,
    <LayersOutlinedIcon />,
    <SportsVolleyballOutlinedIcon />,
    <ViewCompactOutlinedIcon />,
    <ListOutlinedIcon />,
    <SaveOutlinedIcon />,
    <ViewInArOutlinedIcon />,
    <DesktopMacOutlinedIcon />,
    <VerifiedUserOutlinedIcon />,
    <LanguageOutlinedIcon />,
    <ErrorOutlineOutlinedIcon />,
];
const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    width: '77rem',
    height: '9rem',
    p: 3
};
const ProfileCard = () => {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);

    useEffect(() => {
        (async () => {
            const userData = await appwriteService.getCurrentUser()
            if (userData) {
                setUser(userData)
            }
        })()
    }, [])
    const theme = useTheme();

    return (
        user && (
            <>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                        style={{ background: "#87CEFA", height: "70px" }}
                    >
                        {/* <Toolbar>
                            <Typography variant="h6" noWrap component="div">
                                Permanent drawer
                            </Typography>
                        </Toolbar> */}
                        <Grid container justifyContent="flex-end">

                            <NotificationsOutlinedIcon style={{ height: "40px", width: "40px", color: "black", margin: "5px" }}></NotificationsOutlinedIcon>
                            <MailOutlinedIcon style={{ height: "40px", width: "40px", color: "black", margin: "5px" }}></MailOutlinedIcon>
                            <SettingsIcon style={{ height: "40px", width: "40px", color: "black", margin: "5px" }}></SettingsIcon>
                            <Typography style={{ marginTop: "15px", margin: "15px", color: "black" }} variant="subtitle1" gutterBottom>
                                XeroCodee
                            </Typography>
                            <AccountBoxIcon style={{ height: "40px", width: "40px", color: "black", margin: "5px" }} sx={{ fontSize: "large" }}></AccountBoxIcon>
                            <Link
                                href={"/logout"}
                                style={{ marginTop: "15px", margin: "15px", color: "black" }}
                            >
                                Logout
                            </Link>
                        </Grid>
                    </AppBar>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            },

                        }}
                        style={{ background: 'linear-gradient(180deg, #87CEFA	10%, #FFFFFF 90%)' }}
                        variant="permanent"
                        anchor="left"
                    >
                        {/* <Toolbar style={{background: 'linear-gradient(180deg, #87CEFA	10%, #FFFFFF 90%)'}}/> */}
                        <Grid style={{ background: 'linear-gradient(180deg, #87CEFA	10%, #FFFFFF 90%)' }}>
                            <List>
                                {['XeroCodee', 'Builder Center', 'Service Board', 'Clusters', 'Databases', 'Environment', 'Workflow', 'Monitoring', 'Security', 'Web Hooks', 'LogError'].map((text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {icons[index]}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>

                    </Drawer>
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1, bgcolor: 'background.default', p: 3, display: 'flex',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                        }}

                    >
                        <Toolbar />

                        <Box style={{ background: 'linear-gradient(180deg, #E2ECF5	10%, #FFFFFF 90%)' }} sx={{ ...commonStyles, borderRadius: '16px' }} >
                            <Typography style={{ color: "black", height: "60px" }} variant="h3" gutterBottom>
                                Hi {user.name}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Welcome to XeroCodee Ecosystem
                            </Typography>
                        </Box>
                        <Box sx={{
                            bgcolor: 'background.paper',
                            borderColor: 'text.primary',
                            m: 1,
                            width: '77rem',
                            height: '70rem',
                            p: 3
                        }} style={{ background: 'linear-gradient(180deg, #E2ECF5	10%, #FFFFFF 90%)' }} >
                            <Typography variant="h5" gutterBottom>
                                Step 1
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Connect to Cloud
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    p: 3,
                                    m: 1,
                                    bgcolor: 'background.paper',
                                    borderRadius: 1,
                                }}
                            >
                                <Card sx={{ display: 'flex', p: 2, l: 2 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                AWS
                                            </Typography>

                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                            <CircleIcon sx={{ fontSize: "small" }}></CircleIcon>
                                            <CircleIcon sx={{ fontSize: "small" }}></CircleIcon>
                                            <RotateRightOutlinedIcon sx={{ fontSize: "small" }}></RotateRightOutlinedIcon>
                                        </Box>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image="/aws.png"
                                        alt="GCP logo"
                                    />
                                </Card>
                                <Card sx={{ display: 'flex', p: 2 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                GCP
                                            </Typography>

                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                            <CircleIcon sx={{ fontSize: "small" }}></CircleIcon>
                                            <CircleIcon sx={{ fontSize: "small" }}></CircleIcon>
                                            <RotateRightOutlinedIcon sx={{ fontSize: "small" }}></RotateRightOutlinedIcon>
                                        </Box>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image="/gcp.png"
                                        alt="GCP logo"
                                    />
                                </Card>
                            </Box>
                            <Typography variant="h5" gutterBottom>
                                Step 2
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Connect to Source Code
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    p: 3,
                                    m: 1,
                                    bgcolor: 'background.paper',
                                    borderRadius: 1,
                                }}
                            >
                                <Card sx={{ display: 'flex', p: 2, l: 2 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                Github
                                            </Typography>

                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                            <CircleIcon sx={{ fontSize: "small" }}></CircleIcon>
                                            <CircleIcon sx={{ fontSize: "small" }}></CircleIcon>
                                            <RotateRightOutlinedIcon sx={{ fontSize: "small" }}></RotateRightOutlinedIcon>
                                        </Box>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image="/github.png"
                                        alt="GCP logo"
                                    />
                                </Card>
                                <Card sx={{ display: 'flex', p: 2, l: 2 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                Gitlab
                                            </Typography>

                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                            <CircleIcon sx={{ fontSize: "small" }}></CircleIcon>
                                            <CircleIcon sx={{ fontSize: "small" }}></CircleIcon>
                                            <RotateRightOutlinedIcon sx={{ fontSize: "small" }}></RotateRightOutlinedIcon>
                                        </Box>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image="/gitlab.png"
                                        alt="GCP logo"
                                    />
                                </Card>
                                <Card sx={{ display: 'flex', p: 2 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                Bitbucket
                                            </Typography>

                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                            <CircleIcon sx={{ fontSize: "small" }}></CircleIcon>
                                            <CircleIcon sx={{ fontSize: "small" }}></CircleIcon>
                                            <RotateRightOutlinedIcon sx={{ fontSize: "small" }}></RotateRightOutlinedIcon>
                                        </Box>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image="/bitbucket.png"
                                        alt="GCP logo"
                                    />
                                </Card>
                            </Box>
                            <Typography variant="h5" gutterBottom>
                                Step 3
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Connect to Datasource
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    p: 3,
                                    m: 1,
                                    bgcolor: 'background.paper',
                                    borderRadius: 1,
                                }}
                            >
                                <Card sx={{ display: 'flex', p: 2, l: 2 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                MongoDB
                                            </Typography>

                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                            <CircleIcon sx={{ fontSize: "small" }}></CircleIcon>
                                            <CircleIcon sx={{ fontSize: "small" }}></CircleIcon>
                                            <RotateRightOutlinedIcon sx={{ fontSize: "small" }}></RotateRightOutlinedIcon>
                                        </Box>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image="/mongodb.png"
                                        alt="GCP logo"
                                    />
                                </Card>
                                <Card sx={{ display: 'flex', p: 2 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                Reddis
                                            </Typography>

                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                            <CircleIcon sx={{ fontSize: "small" }}></CircleIcon>
                                            <CircleIcon sx={{ fontSize: "small" }}></CircleIcon>
                                            <RotateRightOutlinedIcon sx={{ fontSize: "small" }}></RotateRightOutlinedIcon>
                                        </Box>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image="/reddis.png"
                                        alt="GCP logo"
                                    />
                                </Card>
                                <Card sx={{ display: 'flex', p: 2 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                Postgres SQL
                                            </Typography>

                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                            <CircleIcon sx={{ fontSize: "small" }}></CircleIcon>
                                            <CircleIcon sx={{ fontSize: "small" }}></CircleIcon>
                                            <RotateRightOutlinedIcon sx={{ fontSize: "small" }}></RotateRightOutlinedIcon>
                                        </Box>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image="/postgres.png"
                                        alt="GCP logo"
                                    />
                                </Card>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </>
        )
    );
}

export default ProfileCard;