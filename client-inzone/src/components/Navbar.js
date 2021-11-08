import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import {
  Home,
  Settings,
  Logout,
  Chat,
  Notifications,
  Assignment,
} from "@mui/icons-material";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  componentDidMount() {
    if (!JSON.parse(localStorage.getItem("userInformation"))) {
      this.props.history.push("/login");
      window.location.reload(false)
    }
  }
  render() {
    return (
      <Box sx={{ pb: 7 }}>
        <CssBaseline />
        {/* app bar */}
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                textAlign: "left",
                flexGrow: 1,
                display: { xs: "block", sm: "block" },
              }}
            >
              Examify
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() =>
                JSON.parse(localStorage.getItem("userInformation")).role ===
                "student"
                  ? this.props.history.push("/student")
                  : this.props.history.push("/coordinator")
              }
            >
              <Home />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() =>
                JSON.parse(localStorage.getItem("userInformation")).role ===
                "student"
                  ? this.props.history.push("/student/chat")
                  : this.props.history.push("/coordinator/chat")
              }
            >
              <Chat />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() =>
                JSON.parse(localStorage.getItem("userInformation")).role ===
                "student"
                  ? this.props.history.push("/student/notifications")
                  : this.props.history.push("/coordinator/notifications")
              }
            >
              <Notifications />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() =>
                JSON.parse(localStorage.getItem("userInformation")).role ===
                "student"
                  ? this.props.history.push("/student/exams")
                  : this.props.history.push("/coordinator/exams")
              }
            >
              <Assignment />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() =>
                JSON.parse(localStorage.getItem("userInformation")).role ===
                "student"
                  ? this.props.history.push("/student/settings")
                  : this.props.history.push("/coordinator/settings")
              }
            >
              <Settings />
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                localStorage.removeItem("userInformation");
                this.props.history.push("/login");
                window.location.reload(false)
              }}
            >
              <Logout />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
export default withRouter(Navbar);
