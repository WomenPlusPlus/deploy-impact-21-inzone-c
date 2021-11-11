import React, { useContext, useEffect } from "react";
import {
  Box,
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
import { withRouter, useHistory } from "react-router-dom";
import { CustomThemeContext } from '../themes/CustomThemeProvider'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import SwitchUI from '@material-ui/core/Switch'


function Navbar() {
  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const history = useHistory();
  const isDark = Boolean(currentTheme === 'dark');

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("userInformation"))) {
      history.push("/login");
      window.location.reload(false)
    }
  });

  const handleThemeChange = (event) => {
    const { checked } = event.target
    if (checked) {
      setTheme('dark')
    } else {
      setTheme('normal')
    }
  }

  return (
    <Box sx={{ pb: 7 }}>
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
          <FormControlLabel
            control={<SwitchUI checked={isDark} onChange={handleThemeChange} />}
          />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() =>
              JSON.parse(localStorage.getItem("userInformation")).role ===
                "student"
                ? history.push("/student")
                : history.push("/coordinator")
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
                ? history.push("/student/chat")
                : history.push("/coordinator/chat")
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
                ? history.push("/student/notifications")
                : history.push("/coordinator/notifications")
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
                ? history.push("/student/exams")
                : history.push("/coordinator/exams")
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
                ? history.push("/student/settings")
                : history.push("/coordinator/settings")
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
export default withRouter(Navbar);
