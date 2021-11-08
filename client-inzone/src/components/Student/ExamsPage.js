import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import {
  Typography,
  Box,
  Paper,
  Grid,
  LinearProgress,
  Card,
  IconButton,
  CardContent,
  Popover,
} from "@mui/material";
import { PlayArrow, Download, Info } from "@mui/icons-material";
import ExamStepHandlingComponent from "./Exams/ExamStepHandlingComponent";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ExamsPage = () => {
  const [loading, setLoading] = useState(true);
  const [exams, setExams] = useState();
  const [anchorElInfoButton, setAnchorElInfoButton] = useState(null);
  const [examInfo, setExamInfo] = useState();

  const handleClickInfoButton = (event) => {
    setAnchorElInfoButton(event.currentTarget);
  };

  const handleCloseInfoButton = () => {
    setAnchorElInfoButton(null);
  };

  const loadExams = () => {
    // refugeeCampId of User => JSON.parse(localStorage.getItem("userInformation")).refugeeCampId.objectId
    fetch(
      `https://inzone-c-parse.tools.deployimpact.ch/parse/classes/Exam?where={"$or":[{"examLocation":{"__type":"Pointer","className":"RefugeeCamp","objectId":"${
        JSON.parse(localStorage.getItem("userInformation")).refugeeCampId
          .objectId
      }"}},{"examLocation":null}]}&include=examLocation&include=createdBy`,
      {
        method: "GET",
        headers: {
          "X-Parse-Application-Id": "inzonec",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setExams(json.results);
      })
      .catch((err) => console.log(err));
  };

  const loadExam = (exam) => {
    let examObject = {
      examId: exam.objectId,
      firstSectionStartDate: exam.firstSectionStartDate.iso,
      secondSectionStartDate: exam.secondSectionStartDate.iso,
      thirdSectionStartDate: exam.thirdSectionStartDate.iso,
      firstSectionEndDate: exam.firstSectionEndDate.iso,
      secondSectionEndDate: exam.secondSectionEndDate.iso,
      thirdSectionEndDate: exam.thirdSectionEndDate.iso,
      firstSectionLink: exam.firstSectionLink,
      mcq: {},
    };
    fetch(
      `https://inzone-c-parse.tools.deployimpact.ch/parse/classes/MultipleChoiceQuestion?where={"examId":{"__type":"Pointer","className":"Exam","objectId":"${exam.objectId}"}}`,
      {
        method: "GET",
        headers: {
          "X-Parse-Application-Id": "inzonec",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        let questions = [];
        json.results.map((question) => {
          questions.push(question);
        });
        examObject.mcq = questions;
      }).then(() => {
        // TODO: We will get user's answer here! 
        console.log(examObject)
        setExamInfo(examObject);        
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadExams();
  }, []);
  return (
    <>
      <Box
        style={examInfo && { display: "none" }}
        sx={{ flexGrow: 1, paddingLeft: "100px", paddingRight: "100px" }}
      >
        <Grid container spacing={2}>
          <Item>
            {loading === true && <LinearProgress />}
            <Grid container item spacing={3}>
              {exams &&
                exams.map((exam, index) => (
                  <Grid item xs={6} key={index}>
                    <Card sx={{ display: "flex" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "center",
                        }}
                      >
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Typography component="div" variant="h5">
                            {exam.name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                          >
                            Live Section Start Date:{" "}
                            {exam.firstSectionStartDate.iso}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                          >
                            Question Section Start Date:{" "}
                            {exam.secondSectionStartDate.iso}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                          >
                            Capstone Project Feedback Start Date:{" "}
                            {exam.thirdSectionStartDate.iso}
                          </Typography>
                        </CardContent>
                        <Box
                          sx={{
                            alignItems: "center",
                            pl: 1,
                            pb: 1,
                          }}
                        >
                          <IconButton
                            onClick={() => alert(JSON.stringify(exam))}
                          >
                            <Download sx={{ height: 38, width: 38 }} />
                          </IconButton>
                          <IconButton
                            onClick={() => loadExam(exam)}
                            // component={NavLink}
                            // to={"/exams/exam/" + exam.objectId}
                          >
                            <PlayArrow sx={{ height: 38, width: 38 }} />
                          </IconButton>
                          <IconButton
                            aria-label="next"
                            onClick={handleClickInfoButton}
                          >
                            <Info sx={{ height: 38, width: 38 }} />
                          </IconButton>
                          <Popover
                            id={index}
                            open={Boolean(anchorElInfoButton)}
                            anchorEl={anchorElInfoButton}
                            onClose={handleCloseInfoButton}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                            }}
                          >
                            <Typography sx={{ p: 2 }}>
                              Created By: {exam.createdBy.name}
                            </Typography>
                            <Typography sx={{ p: 2 }}>
                              Live Section End Date:{" "}
                              {exam.firstSectionEndDate.iso}
                            </Typography>
                            <Typography sx={{ p: 2 }}>
                              Question Section End Date:{" "}
                              {exam.secondSectionEndDate.iso}
                            </Typography>
                            <Typography sx={{ p: 2 }}>
                              Capstone Project Feedback Section End Date:{" "}
                              {exam.thirdSectionEndDate.iso}
                            </Typography>
                          </Popover>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Item>
        </Grid>
      </Box>
      {examInfo && <ExamStepHandlingComponent examInfo={examInfo} />}
    </>
  );
  //
};

export default ExamsPage;
