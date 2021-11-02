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
} from "@mui/material";
import { Assignment, PlayCircleFilledWhite } from "@mui/icons-material";

const ExamsPage = () => {
  const renderRow = () => {
    return (
      <>
        <ListItem
          alignItems="flex-start"
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <PlayCircleFilledWhite />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <Assignment />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Exam Name" secondary={"Exam Description"} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem
          alignItems="flex-start"
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <PlayCircleFilledWhite />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <Assignment />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Exam Name" secondary={"Exam Description"} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem
          alignItems="flex-start"
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <PlayCircleFilledWhite />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <Assignment />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Exam Name" secondary={"Exam Description"} />
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    );
  };
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {renderRow()}
    </List>
  );
};

export default ExamsPage;
