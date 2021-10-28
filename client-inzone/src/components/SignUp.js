import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import red from '@mui/material/colors/red';

const theme = createTheme({
    palette: {
        primary: red,
    },
});

export default function SignUp() {
    const paperStyle = { padding: 20, height: '70vh', width: 500, margin: "20px auto" }
    const btnstyle = { margin: '8px 0' }
    return (

        <ThemeProvider theme={theme}>
            <div className="Title">
                <h1>InZone App</h1>
            </div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <h2>Sign Up</h2>
                        <h3>Create an account now</h3>
                    </Grid>
                    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
                        <TextField label='Name' placeholder='Enter Name' fullWidth required />
                        <TextField label='Last Name' placeholder='Enter Last Name' fullWidth required />
                        <TextField label='Email' placeholder='Enter Email' type="email" fullWidth required />
                        <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
                        <TextField label='Re enter password' placeholder='Re enter password' type='password' fullWidth required />
                        <TextField label='Phone Number' placeholder='Enter username' type='tel' fullWidth required />
                    </div>
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Register</Button>
                    <div style={{ display: 'flex' }}>
                        <Typography style={{ marginRight: '5px' }}> Do you have an account?</Typography>
                        <Link to={'/page1'}>Sign In</Link>
                    </div>
                </Paper>
            </Grid>
        </ThemeProvider>

    )
}
