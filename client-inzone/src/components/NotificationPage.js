import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Divider,
  Avatar,
  IconButton,
  ListItemText,
  List,
  Grid,
  Paper,
} from "@mui/material";
import { Check, CircleNotifications } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const NotificationPage = () => {
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
          <ListItemText
            primary="Exam Notification!"
            secondary={"Notification Description"}
          />
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
          <ListItemText
            primary="Chat Notification"
            secondary={"Notification Description"}
          />
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
          <ListItemText
            primary="Certificate Notification"
            secondary={"Notification Description"}
          />
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
          <ListItemText
            primary="Exam Notification!"
            secondary={"Notification Description"}
          />
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
          <ListItemText
            primary="Chat Notification"
            secondary={"Notification Description"}
          />
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
          <ListItemText
            primary="Certificate Notification"
            secondary={"Notification Description"}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    );
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <List
              sx={{ width: "100%", paddingLeft: '30%', paddingRight: "30%", bgcolor: "background.paper" }}
            >
              {renderRow()}
            </List>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));
export default NotificationPage;
