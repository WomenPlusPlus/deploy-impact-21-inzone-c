import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Box, Modal, Divider, Button } from "@mui/material";
import DownloadButton from "./DownloadButton";

const ModalUpload = (props) => {
  const { modalIsOpen, closeModal } = props;

  return (
    <Modal open={modalIsOpen} onClose={() => closeModal(true)}>
      <Box sx={styles.styleOfModal}>
        <Typography style={styles.modalTitle}>
          Upload the *.csv file here
        </Typography>
        <UploadInput
          accept=".csv"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button style={styles.uploadButton}>Upload File</Button>
        <DownloadButton />
        <Button
          variant="contained"
          color="success"
          style={styles.nextButton}
          onClick={() => closeModal(true)}
        >
          Next
        </Button>
      </Box>
    </Modal>
  );
};

const UploadInput = styled("input")({
  display: "none",
});

const styles = {
  styleOfModal: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#2B2E39",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#E3E4E5",
  },
  nextButton: {
    marginTop: 80,
    height: 30,
    float: "right",
    backgroundColor: "#F8BE48",
    color: "#2B2E39",
  },
  uploadButton: {
    backgroundColor: "#F8BE48",
    color: "#2B2E39",
    marginTop: 15,
  },
};

export default ModalUpload;
