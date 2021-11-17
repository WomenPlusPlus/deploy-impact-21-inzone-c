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
              props.closeExamStepsTotally(true, true);
            }}
            variant="contained"
            style={styles.examActionButton}
          >
            Begin
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
