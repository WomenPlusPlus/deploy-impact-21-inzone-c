import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  LinearProgress,
  Grid,
  Paper,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  TextField,
  Select,
  MenuItem,
  Button,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ExpandLess,
  ExpandMore,
  Sort,
  Search,
  Upload,
  Send,
  CalendarToday,
  Download,
  Visibility,
  InsertDriveFile,
} from "@mui/icons-material";
import ModalUpload from "../ModalUpload";

const ExamsPage = () => {
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex("");
    } else {
      setSelectedIndex(index);
    }
  };
  return (
    <div>
      <CssBaseline />
      <Box
        sx={{
          height: "190vh",
        }}
      >
        <CssBaseline />
        <Grid container spacing={0} justifyContent="center">
          <Item style={styles.bigItemStyle}>
            {loading === true && <LinearProgress />}
            <div style={styles.headerDiv}>
              <Typography sx={styles.headerTitle}>Exams</Typography>
            </div>
            <Divider style={{ marginBottom: 30 }} />
            <div>
              <Select
                style={styles.selectBox}
                value={sortBy}
                onChange={(event) => console.log(event.target.value)}
              >
                <MenuItem value={0}>
                  <ListItemIcon style={{ float: "left" }}>
                    <Sort />
                    <span style={{ marginLeft: 5, float: "right" }}>
                      Filter
                    </span>
                  </ListItemIcon>
                </MenuItem>
                <MenuItem value={10}>Date</MenuItem>
                <MenuItem value={20}>Group</MenuItem>
                <MenuItem value={30}>Course</MenuItem>
              </Select>
              <Box sx={styles.searchBox}>
                <Search sx={{ color: "action.active", m: 1 }} />
                <TextField
                  label="Search"
                  variant="standard"
                  style={{ marginBottom: 3 }}
                />
              </Box>
            </div>
            <div>
              <Button
                onClick={() => setOpenModal(true)}
                style={styles.headerButton}
              >
                <Upload />
                Upload Exam
              </Button>
              <ModalUpload
                modalIsOpen={openModal}
                closeModal={(closeTime) => closeTime && setOpenModal(false)}
              />
            </div>
            <Grid container item spacing={5}>
              <List sx={styles.listStyle}>
                {[0, 1, 2].map((value, index) => {
                  return (
                    <>
                      <ListItem
                        key={value}
                        button
                        onClick={() => handleClick(index)}
                        style={{ marginTop: 30 }}
                        disablePadding
                      >
                        <ListItemButton role={undefined} dense>
                          <ListItemText
                            primary={
                              <Typography
                                style={{ fontSize: 25, color: "#E3E4E5" }}
                              >
                                {value === 0
                                  ? "November Math Exam"
                                  : `Exam Name #${value + 1}`}
                              </Typography>
                            }
                            secondary={
                              <>
                                <Typography
                                  style={{ fontSize: 10, color: "#75777E" }}
                                >
                                  Lorem ipsum dolor es at mit. Vix ad senserit
                                  salutandi argumentum.
                                </Typography>
                                <Typography
                                  style={{ fontSize: 10, color: "#75777E" }}
                                >
                                  Assum suavitate ea vel, vero erat doming cu
                                  cum. Zril ornatus sea cu. Pro ex pertinax.
                                </Typography>
                              </>
                            }
                          />
                          <Chip
                            label={`Group Name #${value + 1}`}
                            style={{ marginRight: 5 }}
                          />
                          <Chip
                            label={`11/2${value + 1}/2021`}
                            style={{ marginRight: 5 }}
                          />
                          <Chip label="Pending" style={{ marginRight: 5 }} />
                          {index === selectedIndex ? (
                            <ExpandLess style={styles.moreButton} />
                          ) : (
                            <ExpandMore style={styles.moreButton} />
                          )}
                        </ListItemButton>
                      </ListItem>
                      <Collapse
                        in={index === selectedIndex}
                        timeout="auto"
                        unmountOnExit
                      >
                        <div>
                          <Grid container spacing={2}>
                            <Grid item xs={8}>
                              <Item style={styles.expandedItemLeftGrid}>
                                <Grid container spacing={2}>
                                  <Grid item xs={8}>
                                    <Item style={styles.expandedItemLeftGrid}>
                                      <Typography
                                        style={
                                          styles.expandedDescriptionTimeAndType
                                        }
                                      >
                                        Date Scheduled
                                      </Typography>
                                    </Item>
                                  </Grid>
                                  <Grid item xs={4}>
                                    <Item style={styles.expandedItemRightGrid}>
                                      <Chip label={`11/2${value + 1}/2021`} />
                                    </Item>
                                  </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                  <Grid item xs={8}>
                                    <Item style={styles.expandedItemLeftGrid}>
                                      <Typography
                                        style={
                                          styles.expandedDescriptionTimeAndType
                                        }
                                      >
                                        Class / Group
                                      </Typography>
                                    </Item>
                                  </Grid>
                                  <Grid item xs={4}>
                                    <Item style={styles.expandedItemRightGrid}>
                                      <Chip
                                        label={`Group Name #${value + 1}`}
                                        style={{ marginRight: 5 }}
                                      />
                                    </Item>
                                  </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                  <Grid item xs={2}>
                                    <Item style={styles.expandedItemLeftGrid}>
                                      <Typography
                                        style={
                                          styles.expandedDescriptionTimeAndType
                                        }
                                      >
                                        Students
                                      </Typography>
                                    </Item>
                                  </Grid>
                                  <Grid item xs={10}>
                                    <Item style={styles.expandedItemRightGrid}>
                                      <div style={{ float: "right" }}>
                                        <Chip
                                          label={`Click for ${
                                            value + 40
                                          } student`}
                                          style={{ marginRight: 5 }}
                                        />
                                      </div>
                                    </Item>
                                  </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                  <Grid item xs={2}>
                                    <Item style={styles.expandedItemLeftGrid}>
                                      <div
                                        style={{
                                          display: "flex",
                                          float: "left",
                                        }}
                                      >
                                        <Typography
                                          style={
                                            styles.expandedDescriptionTimeAndType
                                          }
                                        >
                                          Status
                                        </Typography>
                                      </div>
                                    </Item>
                                  </Grid>
                                  <Grid item xs={10}>
                                    <Item style={styles.expandedItemRightGrid}>
                                      <div
                                        style={{
                                          display: "flex",
                                          float: "right",
                                        }}
                                      >
                                        <Chip
                                          label="Pending"
                                          style={{ marginRight: 5 }}
                                        />
                                        <Chip
                                          label="In Progress"
                                          style={{ marginRight: 5 }}
                                        />
                                        <Chip
                                          label="Finalised"
                                          style={{ marginRight: 5 }}
                                        />
                                        <Chip label="Submitted" />
                                      </div>
                                    </Item>
                                  </Grid>
                                </Grid>
                              </Item>
                            </Grid>
                            <Grid item xs={4}>
                              <Item style={styles.expandedItemRightGrid}>
                                <Button
                                  style={styles.expandedButton}
                                >
                                  <Send />
                                  Send to Professor
                                </Button>
                                <Button
                                  style={styles.expandedButton}
                                >
                                  <CalendarToday />
                                  Notify Date {'&'} Time
                                </Button>
                                <Button
                                  style={styles.expandedButton}
                                >
                                  <Download />
                                  Download
                                </Button>
                                <Button
                                  style={styles.expandedButton}
                                >
                                  <Visibility />
                                  View / Edit Exam
                                </Button>
                                <Button
                                  style={styles.expandedButton}
                                >
                                  <InsertDriveFile />
                                  Download Data
                                </Button>
                              </Item>
                            </Grid>
                          </Grid>
                        </div>
                      </Collapse>
                    </>
                  );
                })}
              </List>
            </Grid>
          </Item>
        </Grid>
      </Box>
    </div>
  );
};
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));
const styles = {
  bigItemStyle: {
    paddingLeft: 80,
    paddingRight: 80,
    width: "130vh",
    backgroundColor: "#2B2E39",
  },
  headerDiv: {
    justifyContent: "space-between",
    display: "flex",
    marginBottom: 10,
  },
  headerTitle: {
    float: "left",
    fontSize: 25,
    color: "#E3E4E5",
  },
  expandedTitle: {
    textAlign: "left",
    fontSize: 20,
    color: "#E3E4E5",
  },
  expandedDescriptionTimeAndType: {
    textAlign: "left",
    fontSize: 13,
    color: "#E3E4E5",
  },
  expandedDescriptionFirstLong: {
    textAlign: "left",
    marginTop: 10,
    fontSize: 13,
    color: "#E3E4E5",
  },
  expandedDescriptionSecondLong: {
    textAlign: "left",
    marginTop: 10,
    fontSize: 13,
    color: "#E3E4E5",
  },
  headerButton: {
    float: "right",
    fontSize: 12,
    fontWeight: "bold",
    height: 40,
    marginRight: 7,
    backgroundColor: "#F8BE48",
    color: "#2B2E39",
  },
  expandedButton: {
    fontSize: 13,
    marginTop: 16,
    width: '100%',
    justifyContent: 'space-between',
    fontWeight: "bold",
    height: 25,
    backgroundColor: "#F8BE48",
    color: "#2B2E39",
  },
  modalBoxButtonRestart: {
    fontSize: 10,
    marginTop: 15,
    marginRight: 5,
    height: 25,
    backgroundColor: "#2B2E39",
    color: "#E3E4E5",
    borderColor: "#F8BE48",
    borderWidth: 1,
    borderStyle: "solid",
  },
  modalBoxButtonCancel: {
    fontSize: 10,
    marginTop: 15,
    marginLeft: 5,
    height: 25,
    backgroundColor: "#F8BE48",
    color: "#2B2E39",
  },
  listStyle: {
    width: "100%",
    maxWidth: "100%",
    bgcolor: "#2B2E39",
    marginLeft: 5,
    marginTop: 2,
    color: "#E3E4E5",
  },
  moreButton: {
    color: "#E3E4E5",
    borderWidth: 1,
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#F8BE48",
  },
  divider: {
    marginTop: 2,
    marginBottom: 8,
  },
  expandedItemLeftGrid: {
    backgroundColor: "#20222B",
    margin: 5,
  },
  expandedItemRightGrid: {
    backgroundColor: "#20222B",
    margin: 5,
  },
  expandedImage: {
    backgroundColor: "#2B2E39",
    border: "none",
  },
  selectBox: {
    float: "left",
    width: 150,
    height: 40,
    justifyContent: "space-between",
    borderColor: "#F8BE48",
    borderWidth: 1,
    borderStyle: "solid",
  },
  searchBox: {
    display: "flex",
    alignItems: "flex-end",
    float: "left",
    width: 150,
    height: 40,
    marginLeft: 2,
    borderColor: "#F8BE48",
    borderWidth: 1,
    borderRadius: 2,
    borderStyle: "solid",
  },
  modalBoxStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#2B2E39",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  modalBoxIconDiv: {
    textAlign: "center",
  },
  modalBoxIcon: {
    fontSize: 50,
  },
  modalBoxTitle: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  modalBoxShortDescription: {
    textAlign: "center",
    fontSize: 15,
  },
  modalBoxLongDescription: {
    textAlign: "center",
    fontSize: 10,
    marginTop: 30,
  },
};
export default ExamsPage;
