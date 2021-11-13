import React, { Component } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { withRouter } from "react-router-dom";

const theme = createTheme();

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
    // This binding is necessary to make `this` work in the callback
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("userInformation"))) {
      if (
        JSON.parse(localStorage.getItem("userInformation")).role === "student"
      ) {
        this.props.history.push("/student");
      } else if (
        JSON.parse(localStorage.getItem("userInformation")).role ===
        "coordinator"
      ) {
        this.props.history.push("/coordinator");
      }
    } else {
      this.props.history.push("/login");
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(
      `https://inzone-c-parse.tools.deployimpact.ch/parse/login?username=${this.state.username}&password=${this.state.password}`,
      {
        method: "POST",
        headers: {
          "X-Parse-Application-Id": "inzonec",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.code === 101) {
          // Invalid username/password.
          alert(json.error);
        } else if (json.code === 201) {
          // Password is required.
          alert(json.error);
        } else if (json.code === 200) {
          // Username is required.
          alert(json.error);
        } else {
          // localStorage.setItem("rememberMe", rememberMe); -> Comment this for now about rememberMe feature.
          // localStorage.setItem("userInfo", rememberMe ? user : ""); -> Comment this for now about rememberMe feature.
          localStorage.setItem("userInformation", JSON.stringify(json));
          if (json.role === "student") {
            this.props.history.push("/student");
          } else {
            this.props.history.push("/coordinator");
          }
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={this.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                onChange={(input) => {
                  this.setState({ username: input.target.value });
                }}
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={(input) =>
                  this.setState({ password: input.target.value })
                }
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}

export default withRouter(LoginPage);
