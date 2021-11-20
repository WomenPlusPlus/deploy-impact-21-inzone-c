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
  IconButton,
  TextField,
  Select,
  MenuItem,
  Button,
  Modal,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  MoreHoriz,
  ExpandLess,
  ExpandMore,
  Sort,
  Search,
  BlurLinear,
  Groups,
} from "@mui/icons-material";

const StudentsPage = () => {
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
              <Typography sx={styles.headerTitle}>Students</Typography>
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
              <Button style={styles.headerButton}>
                <Groups />
                Create Group
              </Button>
              <Button style={styles.headerButton}>
                <BlurLinear />
                Report Data
              </Button>
            </div>
            <Grid container item spacing={5}>
              <List sx={styles.listStyle}>
                {[0, 1, 2, 3].map((value, index) => {
                  return (
                    <>
                      <ListItem
                        key={value}
                        button
                        onClick={() => handleClick(index)}
                        secondaryAction={
                          <>
                            <IconButton edge="end" aria-label="more">
                              <MoreHoriz style={styles.moreButton} />
                            </IconButton>
                          </>
                        }
                        disablePadding
                      >
                        <ListItemButton role={undefined} dense>
                          <ListItemText
                            primary={`Group Name #${
                              value + 1
                            } ----- Course Name #${
                              value + 1
                            } ----- Exam Date 0${value + 1}/20/2021`}
                          />
                          {index === selectedIndex ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
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
                            <Grid item xs={6}>
                              <Item style={styles.expandedItemLeftGrid}>
                                <Paper
                                  variant="outlined"
                                  style={styles.expandedImage}
                                >
                                  <img
                                    width="100%"
                                    src="/some_distrubution.png"
                                  />
                                </Paper>
                              </Item>
                            </Grid>
                            <Grid item xs={6}>
                              <Item style={styles.expandedItemRightGrid}>
                                <Paper
                                  variant="outlined"
                                  style={styles.expandedImage}
                                >
                                  <img
                                    width="100%"
                                    src="/wordcloud.jpg"
                                  />
                                </Paper>
                              </Item>
                            </Grid>
                            <Grid item xs={8}>
                              <Item style={styles.expandedItemLeftGrid}>
                                <Paper
                                  variant="outlined"
                                  style={styles.expandedImage}
                                >
                                  <img
                                    width="100%"
                                    src="/sentimentanalysis.png"
                                  />
                                </Paper>
                              </Item>
                            </Grid>
                            <Grid item xs={4}>
                              <Item style={styles.expandedItemRightGrid}>
                                <Paper
                                  variant="outlined"
                                  style={styles.expandedImage}
                                >
                                  <img
                                    width="100%"
                                    src="/averageexamtime.png"
                                  />
                                </Paper>
                              </Item>
                            </Grid>
                            <Grid item xs={6}>
                              <Item style={styles.expandedItemLeftGrid}>
                                <Paper
                                  variant="outlined"
                                  style={styles.expandedImage}
                                >
                                  <img
                                    width="100%"
                                    src="/malefemale.png"
                                  />
                                </Paper>
                              </Item>
                            </Grid>
                            <Grid item xs={6}>
                              <Item style={styles.expandedItemRightGrid}>
                                <Paper
                                  variant="outlined"
                                  style={styles.expandedImage}
                                >
                                  <img
                                    width="100%"
                                    src="/attendance.png"
                                  />
                                </Paper>
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
export default StudentsPage;
