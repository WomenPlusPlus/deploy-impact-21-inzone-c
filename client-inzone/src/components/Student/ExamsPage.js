import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
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
  FormControl,
  Input,
  InputAdornment,
  Modal,
  TextField,
  Divider,
  Button
} from "@mui/material";
import {
  Download,
  Search,
  FormatListBulleted,
  Apps,
  Info,
  ViewWeek,
  Create,
  Feedback,
  PlaylistAddCheck,
} from "@mui/icons-material";
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
      })
      .then(() => {
        // TODO: We will get user's answer here!
        console.log(examObject);
        setExamInfo(examObject);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadExams();
  }, []);

  const infoExam = (index, exam) => {
    return (
      <>
        <IconButton aria-label="next" onClick={handleClickInfoButton}>
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
            Live Section End Date: {exam.firstSectionEndDate.iso}
          </Typography>
          <Typography sx={{ p: 2 }}>
            Question Section End Date: {exam.secondSectionEndDate.iso}
          </Typography>
          <Typography sx={{ p: 2 }}>
            Capstone Project Feedback Section End Date:{" "}
            {exam.thirdSectionEndDate.iso}
          </Typography>
        </Popover>
      </>
    );
  };

  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const handleOpenFeedbackModal = () => {
    setOpenFeedbackModal(true);
  };
  const handleCloseFeedbackModal = () => {
    setOpenFeedbackModal(false);
  };

  return (
    <>
      <Grid container spacing={2} style={examInfo && { display: "none" }}>
        <Grid item xs={4}>
          <Item>
            <FormControl variant="standard">
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Typography style={{ marginTop: 20 }}>
              <FormatListBulleted />
              <Apps />
              <ViewWeek />
            </Typography>
            <Typography style={{ marginTop: 20 }}>
              You have {exams && exams.length} exams in your dashboard.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            {loading === true && <LinearProgress />}
            <Grid container item spacing={3}>
              {exams &&
                exams.map((exam, index) => (
                  <Grid item xs={12} key={index}>
                    <Card sx={{ display: "flex" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
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
                            You will start at{" "}
                            {new Date(
                              exam.firstSectionStartDate.iso
                            ).toDateString()}
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
                            Download
                          </IconButton>
                          <IconButton onClick={() => loadExam(exam)}>
                            <Create sx={{ height: 38, width: 38 }} />
                            Begin Exam
                          </IconButton>
                          <IconButton
                            aria-label="next"
                            onClick={handleOpenFeedbackModal}
                          >
                            <PlaylistAddCheck sx={{ height: 38, width: 38 }} />
                            Feedback
                          </IconButton>
                          <Modal
                            open={openFeedbackModal}
                            onClose={handleCloseFeedbackModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={styleOfModal}>
                              <Typography id="modal-modal-title" variant="h6">
                                Here is your feedback and coordinator's feedback
                                for you.
                              </Typography>
                              <TextField
                                id="outlined-multiline-static"
                                label="Your Feedback"
                                multiline
                                disabled
                                rows={4}
                                style={{ marginTop: 20 }}
                                defaultValue="MCQ section was very hard. Live question section was very funny."
                              />
                              <Divider style={{ marginTop: 20 }} />
                              <TextField
                                id="outlined-multiline-static"
                                label="Coordinator's Feedback"
                                multiline
                                disabled
                                rows={4}
                                style={{ marginTop: 20 }}
                                defaultValue="I am glad you like it. We tried to ask hard but you finished it successfully."
                              />
                              <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                              <Button
                                variant="contained"
                                color="success"
                                style={{ height: 40 }}
                                onClick={() => {
                                  handleCloseFeedbackModal();
                                }}
                              >
                                Close
                              </Button>
                            </Box>
                          </Modal>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Item>
        </Grid>
      </Grid>
      {examInfo && <ExamStepHandlingComponent examInfo={examInfo} finishExam={(finishExam) => finishExam && setExamInfo(undefined)} />}
    </>
  );
};
const styleOfModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default ExamsPage;
