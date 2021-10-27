import React from 'react'
import { useTranslation } from 'react-i18next';
import { Grid, Paper, TextField, Button, Typography } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Login(){

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const btnstyle = { margin: '8px 0' }
    const {t} = useTranslation();
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>{t('login')}</h2>
                </Grid>
                <TextField style={{ marginBottom: '10px' }} label='Username' placeholder='Enter username' fullWidth required />
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography > Do you have an account ?
                    <Link to={'/SignUp'}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

