import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  paperStyles: {
    padding: "20px",
    textAlign: "center",
  },
  chipStyle: {
    cursor: "pointer",
    margin: "10px 5px",
    background: "black",
    color: "white",
  },
  navButtons: {
    display: "flex",
    justifyContent: "space-between",
  },
  questionText: {
    padding: "20px",
  },
}));

const SecondStep = (props) => {
  const [seconds, setSeconds] = useState(15);
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
        <Typography sx={{ mt: 2, mb: 1 }} style={{ color: "black" }}>
          {props.examInfo.mcq[questionNo].question}
        </Typography>
        <Paper className={classes.paperStyles} rounded elevation={5}>
          <div>
            <Grid container spacing={2} justify="center">
              <FormControl component="fieldset">
                <RadioGroup aria-label="options" name="radio-buttons-group">
                  <FormControlLabel
                    label={props.examInfo.mcq[questionNo].answerA}
                    control={<Radio />}
                    value={1}
                  />
                  <FormControlLabel
                    label={props.examInfo.mcq[questionNo].answerB}
                    control={<Radio />}
                    value={2}
                  />
                  <FormControlLabel
                    label={props.examInfo.mcq[questionNo].answerC}
                    control={<Radio />}
                    value={3}
                  />
                  <FormControlLabel
                    label={props.examInfo.mcq[questionNo].answerD}
                    control={<Radio />}
                    value={4}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </div>
        </Paper>
        <div className={classes.navButtons}>
          <Chip
            className={classes.chipStyle}
            label={questionNo + 1 + "/" + props.examInfo.mcq.length}
          />
          <Chip className={classes.chipStyle} label={seconds} />
          {(props.examInfo.mcq.length === questionNo + 1) === true ? (
            <Chip
              className={classes.chipStyle}
              onClick={() => props.finishExam(true)}
              label="Finish"
            />
          ) : (
            <Chip
              className={classes.chipStyle}
              onClick={() => nextQuestion()}
              label="Next"
            />
          )}
        </div>
      </Container>
    </>
  );
};
export default SecondStep;
