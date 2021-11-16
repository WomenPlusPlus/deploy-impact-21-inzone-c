import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Create, PlaylistAddCheck } from "@mui/icons-material";
const ExamDiv = (props) => {
  const { examName, firstSectionStartDate, loadExam, handleOpenFeedbackModal, index } = props;
  return (
    <Grid item xs={12} key={index}>
      <Box m={1} style={styles.examBox}>
        <div
          style={{
            justifyContent: "center",
          }}
        >
          <Typography sx={styles.examTitleText}>{examName}</Typography>
          <Typography
            sx={styles.examDescriptionText}
            variant="subtitle1"
            component="div"
          >
            You will start at {new Date(firstSectionStartDate).toDateString()}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IconButton onClick={() => loadExam(true)} style={styles.iconText}>
            <Create />
            Begin Exam
          </IconButton>
          <IconButton
            aria-label="next"
            onClick={() => handleOpenFeedbackModal(true)}
            style={styles.iconText}
          >
            <PlaylistAddCheck />
            Results / Feedback
          </IconButton>
        </div>
      </Box>
    </Grid>
  );
};
const styles = {
  iconText: {
    fontSize: 15,
    width: "11rem",
    float: "right",
    marginBottom: 5,
    color: "#20222B",
    background: "#F8BE48",
    borderRadius: 0,
  },
  examTitleText: {
    fontSize: 20,
    color: "#E3E4E5",
    mt: 2,
    mb: 1,
  },
  examDescriptionText: {
    fontSize: 10,
    color: "#E3E4E5",
    mt: 2,
    mb: 1,
  },
  examBox: {
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    display: "flex",
    border: "1px solid black",
    padding: 8,
  },
};
export default ExamDiv;
