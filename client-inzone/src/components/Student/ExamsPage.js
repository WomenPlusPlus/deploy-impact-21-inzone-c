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
  Modal,
  TextField,
  Divider,
  Button,
} from "@mui/material";
import {
  Download,
  Create,
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
  const [examInfo, setExamInfo] = useState();

  const loadExams = () => {
    // refugeeCampId of User => JSON.parse(localStorage.getItem("userInformation")).refugeeCampId.objectId
    fetch(
      `https://inzone-c-parse.tools.deployimpact.ch/parse/classes/Exam?where={"$or":[{"examLocation":{"__type":"Pointer","className":"RefugeeCamp","objectId":"${JSON.parse(localStorage.getItem("userInformation")).refugeeCampId
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
        json.results.map((question) => questions.push(question));
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

  // const infoExam = (index, exam) => {
  //   return (
  //     <>
  //       <IconButton aria-label="next" onClick={handleClickInfoButton}>
  //         <Info sx={{ height: 38, width: 38 }} />
  //       </IconButton>
  //       <Popover
  //         id={index}
  //         open={Boolean(anchorElInfoButton)}
  //         anchorEl={anchorElInfoButton}
  //         onClose={handleCloseInfoButton}
  //         anchorOrigin={{
  //           vertical: "bottom",
  //           horizontal: "left",
  //         }}
  //       >
  //         <Typography sx={{ p: 2 }}>
  //           Created By: {exam.createdBy.name}
  //         </Typography>
  //         <Typography sx={{ p: 2 }}>
  //           Live Section End Date: {exam.firstSectionEndDate.iso}
  //         </Typography>
  //         <Typography sx={{ p: 2 }}>
  //           Question Section End Date: {exam.secondSectionEndDate.iso}
  //         </Typography>
  //         <Typography sx={{ p: 2 }}>
  //           Capstone Project Feedback Section End Date:{" "}
  //           {exam.thirdSectionEndDate.iso}
  //         </Typography>
  //       </Popover>
  //     </>
  //   );
  // };

  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const handleOpenFeedbackModal = () => {
    setOpenFeedbackModal(true);
  };
  const handleCloseFeedbackModal = () => {
    setOpenFeedbackModal(false);
  };

  return (
    <>
      <Box sx={{
        width: 1023,
        height: 1346,
        backgroundColor: 'primary.background.default',
      }}>
        <Grid style={examInfo && { display: "none" }}>
          <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
            <Item>
              {loading === true && <LinearProgress />}
              <Grid container item spacing={5
              }>
                {exams &&
                  exams.map((exam, index) => (
                    <Grid item xs={6} key={index}>
                      <Card style={{ paddingBottom: 50 }}>

                        <CardContent style={{ marginTop: 10 }} >
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

                        <IconButton
                          onClick={() => alert(JSON.stringify(exam))}
                          style={styles.iconText}>
                          <Download
                            sx={{ height: 45, width: 30, color: "blue" }}
                          />
                          Download
                        </IconButton>

                        <IconButton
                          onClick={() => loadExam(exam)}
                          style={styles.iconText}>
                          <Create sx={{ height: 38, width: 25, color: "blue" }} />
                          Begin Exam
                        </IconButton>
                        <IconButton
                          aria-label="next"
                          onClick={handleOpenFeedbackModal}
                          style={styles.iconText}
                        >
                          <PlaylistAddCheck sx={{ height: 38, width: 38, color: "blue" }} />
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
                            <Divider
                              style={{ marginTop: 20, marginBottom: 20 }}
                            />
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
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </Item>
          </Grid>
        </Grid>
        {examInfo && (
          <ExamStepHandlingComponent
            examInfo={examInfo}
            finishExam={(finishExam) => finishExam && setExamInfo(undefined)}
          />
        )}
      </Box>
    </>
  );
};
const styleOfModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const styles = {
  iconText: {
    fontSize: 15,
  },
  dashboard: {
    height: 200,
    paddingBottom: 100,
  },
}
export default ExamsPage;
