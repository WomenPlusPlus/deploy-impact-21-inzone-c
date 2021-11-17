import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Divider,
  Box,
  Paper,
  Grid,
  LinearProgress,
  Typography,
  CssBaseline
} from "@mui/material";
import ExamStepHandlingComponent from "./Exams/ExamStepHandlingComponent";
import ResultFeedbackModal from "./ResultFeedbackModal";
import ExamDiv from "./ExamDiv";

const ExamsPage = () => {
  const [loading, setLoading] = useState(true);
  const [exams, setExams] = useState();
  const [examInfo, setExamInfo] = useState();
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const [userExamInfo, setUserExamInfo] = useState([]);

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

  const handleOpenFeedbackModal = (exam) => {
    console.log("exam: ", exam.objectId);
    console.log(
      "userID: ",
      JSON.parse(localStorage.getItem("userInformation")).objectId
    );
    fetch(
      `https://inzone-c-parse.tools.deployimpact.ch/parse/classes/UserExam?where={"$and":[{"examId":{"__type":"Pointer","className":"Exam","objectId":"${
        exam.objectId
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
        setUserExamInfo(json.results[0]);
      })
      .then(() => setOpenFeedbackModal(true))
      .catch((err) => console.log(err));
  };
  const handleCloseFeedbackModal = () => {
    setOpenFeedbackModal(false);
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
        }}
      >
        <CssBaseline />
        <Grid style={examInfo && { display: "none" }}>
          <Grid container spacing={0} justifyContent="center">
            <Item style={{ paddingLeft: 80, paddingRight: 80 }}>
              {loading === true && <LinearProgress />}
              <div style={{ justifyContent: "space-between", display: "flex", marginBottom: 10 }}>
                <Typography sx={styles.headerTitle}>Exams</Typography>
                <Typography sx={styles.headerInfo}>
                  You have {exams && exams.length} exams in your dashboard.
                </Typography>
              </div>
              <Divider style={{ marginBottom: 30 }} />
              <Grid container item spacing={5}>
                {exams &&
                  exams.map((exam, index) => (
                    <ExamDiv
                      index={index}
                      examName={exam.name}
                      firstSectionStartDate={exam.firstSectionStartDate.iso}
                      loadExam={(loadTime) => loadTime && loadExam(exam)}
                      handleOpenFeedbackModal={(modalTime) =>
                        modalTime && handleOpenFeedbackModal(exam)
                      }
                    />
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
      {userExamInfo && (
        <ResultFeedbackModal
          modalIsOpen={openFeedbackModal}
          userExamInfo={userExamInfo}
          closeModal={(closeTime) => closeTime && handleCloseFeedbackModal()}
        />
      )}
    </>
  );
};
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "#2B2E39",
}));
const styles = {
  headerTitle: {
    float: "left",
    fontSize: 25,
    color: "#E3E4E5",
  },
  headerInfo: {
    float: "right",
    fontSize: 10,
    marginTop: 3,
  },
};
export default ExamsPage;
