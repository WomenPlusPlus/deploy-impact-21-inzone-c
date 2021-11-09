import React from "react";
import { TextField, Button } from "@mui/material";
import { Send } from "@mui/icons-material";

export const TextInput = () => {
  return (
    <>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          width: "95%"
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-text"
          label="Write something.."
          style={{ width: "100%" }}
          //margin="normal"
        />
        <Button variant="contained" color="primary">
          <Send />
        </Button>
      </form>
    </>
  );
};
