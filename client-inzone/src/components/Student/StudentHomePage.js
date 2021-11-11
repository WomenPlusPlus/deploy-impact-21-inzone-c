import { Typography, Grid, Paper, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const StudentHomePage = () => {
  return (
    <div className="Title">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item  style={styles.home}>
            <Typography variant="h2">
              Welcome {JSON.parse(localStorage.getItem("userInformation")).name}{" "}
              !
            </Typography>{" "}
            <Paper variant="outlined">
              <img width="400" src="/home-logo-sample.png" />
            </Paper>{" "}
            <Typography variant="h4">
              {" "}
              Let 's edit your profile first!
            </Typography>{" "}
            <Typography variant="h4">
              <Link href="/student/settings">Click Here! </Link>{" "}
            </Typography>{" "}
          </Item>{" "}
        </Grid>{" "}
      </Grid>{" "}
    </div>
  );
};
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

const styles = {
  home:{
    
  }
}
export default StudentHomePage;
