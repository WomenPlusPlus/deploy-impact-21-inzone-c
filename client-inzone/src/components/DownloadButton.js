import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";

const useStyles = makeStyles(() => ({
  aStyle: {
    display: "none",
  },
}));

const DownloadButton = () => {
  const classes = useStyles();
  const [fileType, setFileType] = useState("csv");
  const [fileDownloadUrl, setFileDownloadUrl] = useState(null);

  const download = () => {
    // Prepare the file
    let output;
    if (fileType === "json") {
      output = JSON.stringify({ states: this.state.data }, null, 4);
    } else if (fileType === "csv") {
      // Prepare data:
      output = "../data/exam_template.csv";
    } else if (fileType === "text") {
      // Prepare data:
      output = "";
    }
    // Download it
    const blob = new Blob([output]);
    setFileDownloadUrl(URL.createObjectURL(blob));
    document.getElementById('downloadATag').click();

    // this.setState ({fileDownloadUrl: URL.createObjectURL(blob)},
    //   () => {
    //     this.dofileDownload.click();
    //     URL.revokeObjectURL(fileDownloadUrl);  // free up storage--no longer needed.
    //     this.setState({fileDownloadUrl: ""})
    // })
  };

  return (
    <>
      <a
        id="downloadATag"
        className={classes.aStyle}
        download="exam_template.csv"
        href={fileDownloadUrl}
      >
        download it
      </a>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 20 }}
        onClick={download}
      >
        Download exam template
      </Button>
    </>
  );
};

export default DownloadButton;
