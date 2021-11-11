import React, { Component } from "react";
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
        <AppBar style={styles.navbar} position="static">
          <Toolbar>
            <Typography
              style={styles.title}
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
              style={styles.navIcon}
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
              style={styles.navIcon}
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
              style={styles.navIcon}
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
              style={styles.navIcon}
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
              style={styles.navIcon}
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
              style={styles.logOutIcon}
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

const styles ={
   navbar:{
    //  backgroundColor:"black"
   },
   navIcon:{
     marginRight:40,
   },
   logOutIcon:{
    marginRight:200,
   },
   title:{
    marginLeft:200,
    fontWeight:700,
   }
} 
export default withRouter(Navbar);
