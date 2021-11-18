import React from "react";
import { Box, Button, Typography } from "@mui/material";

const ExamComponent = (props) => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box component="span" m={1} style={styles.bigBox}>
          <Typography sx={styles.examPartLabel}>
            Live / Question Section
          </Typography>
          <Button
            variant="contained"
            onClick={() =>
              window.open(props.examInfo.firstSectionLink, "_blank").focus()
            }
            style={styles.examActionButton}
          >
            Begin
          </Button>
        </Box>
        <Box component="span" m={1} style={styles.bigBox}>
          <Typography sx={styles.examPartLabel}>
            MCQ Question Section
          </Typography>
          <Button
            onClick={() => {
              if (JSON.parse(localStorage.getItem("userAnswers")) === null) {
                let objectForUserAnswers = {
                  isFinished: false,
                  remainingTime: props.examInfo.mcqTotalTime,
                };
                localStorage.setItem(
                  "userAnswers",
                  JSON.stringify(objectForUserAnswers)
                );
              } else {
                let timeForLastAnswer = 999999999999999;
                for (const [key, value] of Object.entries(
                  JSON.parse(localStorage.getItem("userAnswers"))
                )) {
                  if (key.includes("question")) {
                    if (value.time < timeForLastAnswer) {
                      timeForLastAnswer = value.time;
                    }
                  }
                }
                let endObject = {};
                for (const [key, value] of Object.entries(
                  JSON.parse(localStorage.getItem("userAnswers"))
                )) {
                  endObject[key] = value;
                }
                let remainingTime =
                  props.examInfo.mcqTotalTime -
                  (props.examInfo.mcqTotalTime - timeForLastAnswer);
                endObject.remainingTime = remainingTime;
                localStorage.setItem("userAnswers", JSON.stringify(endObject));
              }
              props.closeExamStepsTotally(true, true);
            }}
            disabled={
              JSON.parse(localStorage.getItem("userAnswers")) &&
              JSON.parse(localStorage.getItem("userAnswers")).isFinished
            }
            variant="contained"
            style={
              JSON.parse(localStorage.getItem("userAnswers")) &&
              JSON.parse(localStorage.getItem("userAnswers")).isFinished ===
                true
                ? {
                    fontSize: 15,
                    height: 40,
                    color: "#2B2E39",
                    backgroundColor: "#E3E4E5",
                  }
                : styles.examActionButton
            }
          >
            {JSON.parse(localStorage.getItem("userAnswers")) &&
            JSON.parse(localStorage.getItem("userAnswers")).isFinished === true
              ? "Completed"
              : "Begin"}
          </Button>
        </Box>
        <Box component="span" m={1} style={styles.bigBox}>
          <Typography sx={styles.examPartLabel}>
            Capstone Project Feedback
          </Typography>
          <Button
            variant="contained"
            style={styles.examActionButton}
            onClick={() => {
              props.closeExamStepsTotally(true, false);
            }}
            disabled={() => {
              fetch(
                `https://inzone-c-parse.tools.deployimpact.ch/parse/classes/UserExam?where={"$and":[{"examId":{"__type":"Pointer","className":"Exam","objectId":"${
                  props.examInfo.examId
                }"}}, {"userId":{"__type":"Pointer","className":"_User","objectId":"${
                  JSON.parse(localStorage.getItem("userInformation")).objectId
                }"}}]}`,
                {
                  method: "GET",
                  headers: {
                    "X-Parse-Application-Id": "inzonec",
                  },
                }
              )
                .then((response) => response.json())
                .then((json) => {
                  if(json.results[0].capstoneProjectFeedback !== undefined || json.results[0].capstoneProjectFeedback !== null){
                    return true;
                  }
                  return false;
                })
                .catch((err) => console.log(err));
            }}
          >
            Begin
          </Button>
        </Box>
      </Box>
    </>
  );
};
const styles = {
  bigBox: {
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    display: "flex",
    border: "1px solid black",
    padding: 8,
  },
  examPartLabel: {
    mt: 2,
    mb: 1,
    color: "#E3E4E5",
  },
  examActionButton: {
    fontSize: 15,
    height: 40,
    color: "#2B2E39",
    backgroundColor: "#F8BE48",
  },
};
export default ExamComponent;
