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
import OptionalFeedbackModal from "./OptionalFeedbackModal";

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
      <Typography sx={styles.aboveText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nunc
        mauris. Fusce metus eros, aliquet ac tempus in, imperdiet venenatis
        nibh.
      </Typography>
      <Divider style={{ margin: 10 }} />
      <Typography sx={styles.textFeedback}>Text Feedback Input</Typography>
      <TextField
        id="outlined-multiline-static"
        label="Write your feedback."
        multiline
        rows={4}
        defaultValue="I am very happy to finish this course."
      />
      <Divider style={{ margin: 10 }} />
      <Typography sx={styles.textFeedback}>File Upload Input</Typography>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button variant="contained" style={styles.submitButton}>
          Upload
        </Button>
      </label>
      <Divider style={{ marginTop: 20, marginBottom: 20 }} />
      <Button
        variant="contained"
        style={styles.backButton}
        onClick={() => {
          props.submitExam(true);
        }}
      >
        BACK
      </Button>
      <Button
        variant="contained"
        style={styles.submitButton}
        onClick={() => {
          // Store user's data to database. Refresh the page and send user to homepage maybe.
          // Then I will show a Modal to get feedback of all. It will be optional.
          handleOpenFeedbackModal();
        }}
      >
        SUBMIT
      </Button>
      <OptionalFeedbackModal modalIsOpen={openFeedbackModal} closeModal={(closeTime) => closeTime && handleCloseFeedbackModal()} />
    </>
  );
};
const Input = styled("input")({
  display: "none",
});
const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  aboveText: {
    mt: 2,
    mb: 1,
    color: "#E3E4E5",
    fontSize: 15,
  },
  textFeedback: {
    mt: 2,
    mb: 1,
    color: "#E3E4E5",
    fontSize: 18,
    marginBottom: 3,
  },
  submitButton: {
    height: 40,
    marginLeft: 10,
    backgroundColor: "#F8BE48",
    color: "#2B2E39",
    fontWeight: "bold",
    fontSize: 13,
    borderRadius: 5,
  },
  backButton: {
    height: 40,
    marginLeft: 10,
    backgroundColor: "#2B2E39",
    color: "#F8BE48",
    fontWeight: "bold",
    fontSize: 13,
    borderRadius: 5,
  },
};
export default ThirdStep;
