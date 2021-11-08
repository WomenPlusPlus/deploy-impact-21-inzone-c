import React, { useState } from "react";
import {
  Typography,
  Box,
  Divider,
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import ExamComponent from "./ExamComponent";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

const steps = [
  {
    label: "Identify",
    description: `Identify Yourself!`,
  },
  {
    label: "Read rules",
    description: "Read the Rules!",
  },
  {
    label: "Exam Sections",
    description: `Exam sections..`,
  },
];

const ExamStepHandlingComponent = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [closeExamComponent, setCloseExamComponent] = useState(false);
  const [openSecondStep, setOpenSecondStep] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = (values) => {
    console.log("submittedData: ", values);
  };

  return (
    <Box sx={{ flexGrow: 1, paddingLeft: "100px", paddingRight: "100px" }}>
      <Grid container spacing={2}>
        {closeExamComponent === false ? (
          <>
            <Grid item xs={4}>
              <Item>
                <Typography>Exam Steps</Typography>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel>{step.label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>
                      All steps completed - you're finished
                    </Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                      Reset
                    </Button>
                  </Paper>
                )}
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => {
                    if (index === 0) {
                      return (
                        <Step key={step.label}>
                          <StepLabel
                            optional={
                              index === 2 ? (
                                <Typography variant="caption">
                                  Last step
                                </Typography>
                              ) : null
                            }
                          >
                            <Typography
                              variant="h5"
                              component="div"
                              gutterBottom
                            >
                              Identify Verification
                            </Typography>
                          </StepLabel>
                          <StepContent>
                            <Typography component="div" gutterBottom>
                              Personal Details
                            </Typography>
                            <Container component="main" maxWidth="xs">
                              <CssBaseline />
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                }}
                              >
                                <Box
                                  component="form"
                                  onSubmit={handleSubmit}
                                  noValidate
                                  sx={{ mt: 1 }}
                                >
                                  <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="First Input"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                  />
                                  <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Second Input"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                  />
                                  <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Third Input"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                  />
                                  <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Fourth Input"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                  />
                                </Box>
                              </Box>
                            </Container>
                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button
                                  variant="contained"
                                  onClick={handleNext}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  {index === steps.length - 1
                                    ? "Finish"
                                    : "Continue"}
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
                      );
                    } else if (index === 1) {
                      return (
                        <Step key={step.label}>
                          <StepLabel
                            optional={
                              index === 2 ? (
                                <Typography variant="caption">
                                  Last step
                                </Typography>
                              ) : null
                            }
                          >
                            <Typography
                              variant="h5"
                              component="div"
                              gutterBottom
                            >
                              Read Rules
                            </Typography>
                          </StepLabel>
                          <StepContent>
                            <Typography component="div" gutterBottom>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Phasellus eu mauris sed purus tincidunt
                              consequat sagittis ut arcu. Nullam sit amet
                              convallis erat, et hendrerit odio. Orci varius
                              natoque penatibus et magnis dis parturient montes,
                              nascetur ridiculus mus.
                            </Typography>
                            <Divider />
                            <Typography component="div" gutterBottom>
                              Vestibulum libero dolor, laoreet at justo ac,
                              aliquet tempor felis. Orci varius natoque
                              penatibus et magnis dis parturient montes,
                              nascetur ridiculus mus. Quisque sed bibendum
                              tellus. Cras consequat volutpat lorem, vitae
                              tristique felis pretium eu. Aliquam pulvinar
                              iaculis lobortis.
                            </Typography>
                            <Divider />
                            <Typography component="div" gutterBottom>
                              Mauris in purus ante. Nunc pellentesque risus id
                              ante blandit, vel auctor odio viverra.
                              Pellentesque habitant morbi tristique senectus et
                              netus et malesuada fames ac turpis egestas. Ut
                              eget congue lorem, eget vehicula mi. Nunc nulla
                              purus, porttitor at mauris ac, finibus mattis
                              justo.
                            </Typography>

                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button
                                  variant="contained"
                                  onClick={handleNext}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  {index === steps.length - 1
                                    ? "Finish"
                                    : "Continue"}
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
                      );
                    } else if (index === 2) {
                      return (
                        <Step key={step.label}>
                          <StepLabel>
                            <Typography
                              variant="h5"
                              component="div"
                              gutterBottom
                            >
                              Exam Sections
                            </Typography>
                          </StepLabel>
                          <StepContent>
                            <ExamComponent
                              examInfo={props.examInfo}
                              closeExamStepsTotally={(
                                closeTime,
                                isSecondStep
                              ) => {
                                if (
                                  isSecondStep === true &&
                                  closeTime === true
                                ) {
                                  setCloseExamComponent(true);
                                  setOpenSecondStep(true);
                                } else if (
                                  isSecondStep === false &&
                                  closeTime === true
                                ) {
                                  setCloseExamComponent(true);
                                  setOpenSecondStep(false);
                                }
                              }}
                            />
                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button
                                  variant="contained"
                                  onClick={handleNext}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  {index === steps.length - 1
                                    ? "Finish"
                                    : "Continue"}
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
                      );
                    }
                  })}
                </Stepper>
              </Item>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <Item>
                {openSecondStep === true ? (
                  <SecondStep
                    examInfo={props.examInfo}
                    finishExam={(finishExam) =>
                      finishExam && setCloseExamComponent(false)
                    }
                  />
                ) : (
                  <ThirdStep
                    examInfo={props.examInfo}
                    submitExam={(submitExam) =>
                      submitExam && setCloseExamComponent(false)
                    }
                  />
                )}
              </Item>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default ExamStepHandlingComponent;
