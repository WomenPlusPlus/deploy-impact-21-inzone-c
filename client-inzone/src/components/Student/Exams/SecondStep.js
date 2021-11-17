import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  chipStyle: {
    cursor: "pointer",
    margin: "10px 5px",
    background: "black",
    color: "white",
  },
  chipNextStyle: {
    backgroundColor: "#F8BE48",
    color: "#2B2E39",
    fontWeight: "bold",
    fontSize: 13,
    borderRadius: 5,
    width: 70,
    margin: "10px 5px",
  },
  navButtons: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const SecondStep = (props) => {
  const [seconds, setSeconds] = useState(555);
  const classes = useStyles();
  const [questionNo, setQuestionNo] = useState(0);
  const nextQuestion = () => {
    let newQuestionNo = questionNo + 1;
    setQuestionNo(newQuestionNo);
  };
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("BOOOOM!");
      alert("Time is Up!");
      props.finishExam(true);
    }
  });
  return (
    <>
      <Container maxWidth="md">
        <Typography sx={styles.examQuestion}>
          {props.examInfo.mcq[questionNo].question}
        </Typography>
        <div>
          <Grid container spacing={2} justify="center">
            <FormControl component="fieldset">
              <RadioGroup aria-label="options" name="radio-buttons-group">
                <FormControlLabel
                  label={props.examInfo.mcq[questionNo].answerA}
                  style={styles.optionStyle}
                  control={<Radio style={styles.radioStyle} />}
                  value={1}
                />
                <FormControlLabel
                  label={props.examInfo.mcq[questionNo].answerB}
                  style={styles.optionStyle}
                  control={<Radio style={styles.radioStyle} />}
                  value={2}
                />
                <FormControlLabel
                  label={props.examInfo.mcq[questionNo].answerC}
                  style={styles.optionStyle}
                  control={<Radio style={styles.radioStyle} />}
                  value={3}
                />
                <FormControlLabel
                  label={props.examInfo.mcq[questionNo].answerD}
                  style={styles.optionStyle}
                  control={<Radio style={styles.radioStyle} />}
                  value={4}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </div>
        <div className={classes.navButtons}>
          <Chip
            className={classes.chipStyle}
            label={questionNo + 1 + "/" + props.examInfo.mcq.length}
          />
          {(props.examInfo.mcq.length === questionNo + 1) === true ? (
            <Chip
              className={classes.chipNextStyle}
              onClick={() => props.finishExam(true)}
              label="Finish"
            />
          ) : (
            <Chip
              className={classes.chipNextStyle}
              onClick={() => nextQuestion()}
              label="Next"
            />
          )}
          <Chip className={classes.chipStyle} label={seconds} />
        </div>
      </Container>
    </>
  );
};
const styles = {
  examQuestion: {
    mt: 2,
    mb: 1,
    color: "#E3E4E5",
    textAlign: "left",
    fontSize: 20,
    marginBottom: 3,
  },
  optionStyle: {
    borderWidth: 1,
    borderColor: "#E3E4E5",
    borderStyle: "solid",
    borderRadius: 5,
    width: "128vh",
    margin: 10,
  },
  radioStyle: {
    backgroundColor: "#E3E4E5",
    margin: 10,
    width: 32,
    height: 32,
    textAlign: "left",
  },
};
export default SecondStep;
