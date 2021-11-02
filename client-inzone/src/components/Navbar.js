import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import {
    Box,
    CssBaseline,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from "@mui/material";
import { Home, Settings, Logout, Chat, Notifications } from "@mui/icons-material"

export default class Navbar extends Component {

    render() {
        return (
            <Box sx={{ pb: 7 }}>
                <CssBaseline />
                {/* app bar */}
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" noWrap
                            component="div"
                            sx={{
                                textAlign: "left",
                                flexGrow: 1,
                                display: { xs: "block", sm: "block" },
                            }}>Examify</Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            component={NavLink} to="/home">
                            <Home />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            component={NavLink} to="/chat/">
                            <Chat />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            component={NavLink} to="/notifications/">
                            <Notifications />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer">
                            <Settings />
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => {
                                localStorage.removeItem("userInformation");
                                // history.push("/login")
                            }}
                        >
                            <Logout />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>

        )
    }
};