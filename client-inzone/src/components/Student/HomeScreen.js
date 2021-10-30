import React, { Component } from "react";
import {
  Typography,
  Box,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Divider,
  Avatar,
  IconButton,
  ListItemText,
  List,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
} from "@mui/material";
import { Assignment, PlayCircleFilledWhite } from "@mui/icons-material";

const steps = [
  {
    label: "Complete Your Profile and Settings",
    description: `Explanation about completing the profile and settings like notification.`,
  },
  {
    label: "Learn How To Use the Application",
    description:
      "Teach how to use the Application.",
  },
  {
    label: "See Your Progress",
    description: `Let's show how the student will look at their results.`,
  },
  {
    label: "Chat With Friends",
    description: `Chatting usability.`,
  },
  {
    label: "Step 5",
    description:
      "Step 5 Description",
  },
  {
    label: "Step 6",
    description: `Step 6 Description`,
  },
  {
    label: "Step 7",
    description: `Step 7 Description`,
  },
];
const HomeScreen = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Box sx={{ padding: '10%',  }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default HomeScreen;
