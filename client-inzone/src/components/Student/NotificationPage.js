import React, { Component } from "react";
import {
  ListItem,
  ListItemAvatar,
  Divider,
  Avatar,
  IconButton,
  ListItemText,
  List,
} from "@mui/material";
import { Check, CircleNotifications } from "@mui/icons-material";

const NotificationScreen = () => {
  const renderRow = () => {
    return (
      <>
        <ListItem
          alignItems="flex-start"
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Check />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <CircleNotifications />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Exam Notification!" secondary={"Notification Description"} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem
          alignItems="flex-start"
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Check />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <CircleNotifications />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Chat Notification" secondary={"Notification Description"} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem
          alignItems="flex-start"
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Check />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <CircleNotifications />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Certificate Notification" secondary={"Notification Description"} />
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

export default NotificationScreen;
