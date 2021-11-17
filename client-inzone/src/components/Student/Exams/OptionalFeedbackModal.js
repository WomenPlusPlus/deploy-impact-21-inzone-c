import React from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Divider,
  Button,
} from "@mui/material";

const OptionalFeedbackModal = (props) => {
  const { modalIsOpen, closeModal } = props;
  return (
    <Modal open={modalIsOpen} onClose={() => closeModal(true)}>
      <Box sx={styles.modal}>
        <Typography style={styles.text}>
          You have successfully finished your exam!!
        </Typography>
        <Typography style={styles.text}>
          You will receive a notification when your exam has been evaluated.
        </Typography>
        <Typography style={styles.text}>
          You can enter feedback regarding the exam below.
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Feedback(Optional)"
          multiline
          rows={4}
          style={{ marginTop: 20, width: "100%" }}
          defaultValue="MCQ section was very hard. Live question section was very funny."
        />
        <Divider style={styles.divider} />
        <Button
          variant="contained"
          style={styles.skipButton}
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
          style={styles.closeButton}
          onClick={() => {
            // Save the feedback and send user to the exams page
            props.submitExam(true);
          }}
        >
          FINISH
        </Button>
      </Box>
    </Modal>
  );
};

const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "#20222B",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  text: {
    marginBottom: 5,
    color: "#E3E4E5",
    background: "#20222B",
    borderRadius: 0,
  },
  feedbackContainer: {
    textAlign: "center",
    justifyContent: "center",
  },
  resultContainer: {
    textAlign: "center",
    justifyContent: "center",
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  closeButton: {
    height: 40,
    fontSize: 15,
    color: "#20222B",
    background: "#F8BE48",
  },
  skipButton: {
    height: 40,
    fontSize: 15,
    color: "#F8BE48",
    background: "#20222B",
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
};

export default OptionalFeedbackModal;
