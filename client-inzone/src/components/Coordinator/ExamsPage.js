import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Paper,
  Modal,
  Grid,
  LinearProgress,
  IconButton,
  ListItemText,
  FormControl,
  Input,
  InputAdornment,
  ListItem,
  Divider,
} from "@mui/material";
import {
  Search,
  FormatListBulleted,
  Apps,
  ViewWeek,
  PlaylistAddCheck,
  Check,
} from "@mui/icons-material";
import ModalUpload from "../ModalUpload";

const ExamsPage = () => {
  const [loading, setLoading] = useState(true);
  const [userExams, setUsersExams] = useState();
  const [examInfo, setExamInfo] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  // const loadUserExam = (exam) => {
  //   let examObject = {
  //     examId: exam.objectId,
  //   };
  //   fetch(
  //     `https://inzone-c-parse.tools.deployimpact.ch/parse/classes/MultipleChoiceQuestion?where={"examId":{"__type":"Pointer","className":"Exam","objectId":"${exam.objectId}"}}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "X-Parse-Application-Id": "inzonec",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       let questions = [];
  //       json.results.map((question) => {
  //         questions.push(question);
  //       });
  //       examObject.mcq = questions;
  //     })
  //     .then(() => {
  //       // TODO: We will get user's answer here!
  //       console.log(examObject);
  //       setExamInfo(examObject);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const renderUserExam = (exams) => {
    return (
      <>
        {exams.map((exam, index) => (
          <div key={index++}>
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
          </div>
        ))}
      </>
    );
  };

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    loadUsersExams();
  }, []);

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
            <IconButton aria-label="next" onClick={setModalIsOpenToTrue}>
              <PlaylistAddCheck sx={{ height: 38, width: 38 }} />
              Upload/Create Exam
            </IconButton>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            {loading === true && <LinearProgress />}
            {userExams && renderUserExam(userExams)}
          </Item>
        </Grid>
      </Grid>
      <ModalUpload
        modalIsOpen={modalIsOpen}
        closeModal={(closeTime) => closeTime && setModalIsOpenToFalse()}
      />
    </>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default ExamsPage;
