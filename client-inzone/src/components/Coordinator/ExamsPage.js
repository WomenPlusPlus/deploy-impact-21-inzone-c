import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Box,
  Paper,
  Grid,
  LinearProgress,
  IconButton,
  ListItemText,
  FormControl,
  Input,
  InputAdornment,
  Modal,
  ListItem,
  Divider,
  Button,
} from "@mui/material";
import {
  Search,
  FormatListBulleted,
  Apps,
  ViewWeek,
  PlaylistAddCheck,
  Check
} from "@mui/icons-material";
import DownloadButton from "../DownloadButton";

const ExamsPage = () => {

  const [loading, setLoading] = useState(true);
  const [userExams, setUsersExams] = useState();
  const [examInfo, setExamInfo] = useState();

  const loadUsersExams = () => {
    // refugeeCampId of User => JSON.parse(localStorage.getItem("userInformation")).refugeeCampId.objectId
    fetch(
      `https://inzone-c-parse.tools.deployimpact.ch/parse/classes/UserExam?include=userId&include=examId`,
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
        setUsersExams(json.results);
      })
      .catch((err) => console.log(err));
  };

  const loadUserExam = (exam) => {
    let examObject = {
      examId: exam.objectId,
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


  const renderUserExam = (exams) => {
    return (
      <>
        {exams.map((exam) => (
          <>
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <Check />
                </IconButton>
              }
            >
              <ListItemText
                primary={exam.examId.name}
                secondary={exam.userId.name}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </>
    );
  };


  useEffect(() => {
    loadUsersExams();
  }, []);

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
              You have {userExams && userExams.length} exams in your dashboard.
            </Typography>
            <IconButton aria-label="next" onClick={handleOpenFeedbackModal}>
              <PlaylistAddCheck sx={{ height: 38, width: 38 }} />
              Upload/Create Exam
            </IconButton>
            <Modal
              open={openFeedbackModal}
              onClose={handleCloseFeedbackModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleOfModal}>
                <Typography id="modal-modal-title" variant="h6">
                  Upload your csv file
                </Typography>
                <label htmlFor="contained-button-file">
                  <UploadInput
                    accept=".csv"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label>
                <DownloadButton />


                <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                <Button
                  variant="contained"
                  color="success"
                  style={{ height: 40 }}
                  onClick={() => {
                    handleCloseFeedbackModal();
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Modal>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            {loading === true && <LinearProgress />}
            {userExams && renderUserExam(userExams)}
          </Item>
        </Grid>
      </Grid>
    </>
  );
};
const UploadInput = styled("input")({
  display: "none",
});
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
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default ExamsPage;
