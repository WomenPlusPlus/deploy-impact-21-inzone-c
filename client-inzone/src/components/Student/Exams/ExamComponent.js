import React from "react";
import { Box, Button, Typography } from "@mui/material";

const ExamComponent = (props) => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          component="span"
          m={1}
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            height: 100,
            display: "flex",
            border: "1px solid black",
            padding: 8,
          }}
        >
          <Typography sx={{ mt: 2, mb: 1 }} color="black">Live / Question Section</Typography>
          <Button
            disabled={false}
            variant="contained"
            color="secondary"
            onClick={() =>
              window.open(props.examInfo.firstSectionLink, "_blank").focus()
            }
            style={{ height: 40 }}
          >
            Begin
          </Button>
        </Box>
        <Box
          component="span"
          m={1}
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            height: 100,
            display: "flex",
            border: "1px solid black",
            padding: 8,
          }}
        >
          <Typography sx={{ mt: 2, mb: 1 }} color="black">MCQ Question Section</Typography>
          <Button
            onClick={() => {
              props.closeExamStepsTotally(true, true);
            }}
            variant="contained"
            style={{ height: 40 }}
          >
            Begin
          </Button>
        </Box>
        <Box
          component="span"
          m={1}
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            height: 100,
            display: "flex",
            border: "1px solid black",
            padding: 8,
          }}
        >
          <Typography sx={{ mt: 2, mb: 1 }} color="black">
            Capstone Project Feedback
          </Typography>
          <Button
            variant="contained"
            color="success"
            style={{ height: 40 }}
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
export default ExamComponent;
