import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
// import { FormControlLabel } from '@mui/material'; -> Commented this for now.
// import { Checkbox } from '@mui/material'; -> Commented this for now.
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userInformation"))) {
      if (
        JSON.parse(localStorage.getItem("userInformation")).role ===
        "student"
      ) {
        history.push("/student/home");
      } else if (
        JSON.parse(localStorage.getItem("userInformation")).role ===
        "coordinator"
      ) {
        history.push("/coordinator/home");
      }
    } else {
      history.push("/login");
    }
  }, [history]);
  const onClickLogin = () => {
    console.log(`username: ${username}`);
    // Making native request to ParseServer with fetch function.
    // Data to be sent to the POST request
    fetch(
      `https://inzone-c-parse.tools.deployimpact.ch/parse/login?username=${username}&password=${password}`,
      {
        method: "POST",
        headers: {
          "X-Parse-Application-Id": "inzonec",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
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
          window.location.reload(false); // We can improve this line.
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>{t("login")}</h2>
        </Grid>
        <TextField
          style={{ marginBottom: "10px" }}
          label="Username"
          placeholder="Enter username"
          onChange={(input) => setUsername(input.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          onChange={(input) => setPassword(input.target.value)}
          fullWidth
          required
        />
        {/* <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                /> */}
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          onClick={onClickLogin}
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          <Link to="#">Forgot password ?</Link>
        </Typography>
        <Typography>Do you have an account ?</Typography>
        <Link to={"/signup"}>Sign Up</Link>
      </Paper>
    </Grid>
  );
}
const paperStyle = {
  padding: 20,
  height: "70vh",
  width: 280,
  margin: "20px auto",
  textAlign: "center",
};
const btnstyle = { margin: "8px 0" };
