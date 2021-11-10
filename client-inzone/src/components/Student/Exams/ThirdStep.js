import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Typography,
  TextField,
  Divider,
  Modal,
  Box,
} from "@mui/material";

const ThirdStep = (props) => {
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const handleOpenFeedbackModal = () => {
    setOpenFeedbackModal(true);
  };
  const handleCloseFeedbackModal = () => {
    setOpenFeedbackModal(false);
  };
  return (
    <>
      <Typography sx={{ mt: 2, mb: 1 }} color="black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nunc
        mauris. Fusce metus eros, aliquet ac tempus in, imperdiet venenatis
        nibh.
      </Typography>
      <Typography sx={{ mt: 2, mb: 2 }} variant="h6" color="black">
        Text Feedback Input (We can use for sentiment analysis here for tutors)
      </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Write your feedback."
        multiline
        rows={4}
        defaultValue="I am very happy to finish this course."
      />
      <Typography sx={{ mt: 2, mb: 1 }} variant="h6" color="black">
        File Upload Input
      </Typography>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <Divider style={{ marginTop: 20, marginBottom: 20 }} />
      <Button
        variant="contained"
        color="primary"
        style={{ height: 40, marginRight: 10 }}
        onClick={() => {
          props.submitExam(true);
        }}
      >
        BACK
      </Button>
      <Button
        variant="contained"
        color="success"
        style={{ height: 40, marginLeft: 10 }}
        onClick={() => {
          // Store user's data to database. Refresh the page and send user to homepage maybe.
          // Then I will show a Modal to get feedback of all. It will be optional.
          handleOpenFeedbackModal();
        }}
      >
        SUBMIT
      </Button>
      <Modal
        open={openFeedbackModal}
        onClose={handleCloseFeedbackModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleOfModal}>
          <Typography
            id="modal-modal-title"
            style={{ textAlign: "center" }}
            color="black"
          >
            You have successfully finished your exam!!
          </Typography>
          <Typography style={{ textAlign: "center" }}>
            You will receive a notification when your exam has been evaluated.
          </Typography>
          <Typography style={{ textAlign: "center" }} color="black">
            You can enter feedback regarding the exam below.
          </Typography>
          <TextField
            id="outlined-multiline-static"
            label="Feedback(Optional)"
            multiline
            rows={4}
            style={{ marginTop: 20, width: '100%' }}
            defaultValue="MCQ section was very hard. Live question section was very funny."
          />
          <Divider style={{ marginTop: 20, marginBottom: 20 }} />
          <Button
            variant="contained"
            style={{
              height: 40,
              marginRight: 10,
              background: "black",
              color: "white",
            }}
            onClick={() => {
              // Directly send user to the exams page.
              props.submitExam(true);
            }}
          >
            Skip
          </Button>
          <Button
            variant="contained"
            color="success"
            style={{ height: 40, marginLeft: 10 }}
            onClick={() => {
              // Save the feedback and send user to the exams page
              props.submitExam(true);
            }}
          >
            FINISH
          </Button>
        </Box>
      </Modal>
    </>
  );
};
const Input = styled("input")({
  display: "none",
});
const styleOfModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default ThirdStep;
