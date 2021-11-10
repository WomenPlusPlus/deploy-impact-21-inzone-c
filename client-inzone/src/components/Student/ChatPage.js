import React from "react";
import {
  Typography,
  ListItem,
  ListItemAvatar,
  Divider,
  Avatar,
  ListItemText,
  List,
  Grid,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { MessageLeft, MessageRight } from "../Messenger/Message";
import { TextInput } from "../Messenger/TextInput";

const ChatPage = () => {
  const renderRow = () => {
    return (
      <>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    );
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {renderRow()}
            </List>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <div
              style={{
                // width: "100vw",
                // height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Paper
                style={{
                  // width: "80vw",
                  // height: "80vh",
                  maxWidth: "75%",
                  maxHeight: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  position: "relative",
                }}
                zDepth={2}
              >
                <Paper
                  id="style-1"
                  style={{
                    width: "calc( 100% - 20px )",
                    margin: 10,
                    overflowY: "scroll",
                    height: "calc( 100% - 80px )",
                  }}
                >
                  <MessageLeft
                    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lacus in efficitur convallis. Nullam ante dolor, eleifend tincidunt efficitur eget, fermentum et augue"
                    timestamp="MM/DD 00:00"
                    displayName="Coordinator Emrecan"
                  />
                  <MessageRight
                    message="Nunc blandit interdum fringilla. Sed quis lectus a diam interdum aliquet in quis ligula. Curabitur ullamcorper dictum magna, a vulputate sem sagittis at."
                    timestamp="MM/DD 00:00"
                    displayName="Giada"
                  />
                  <MessageLeft
                    message="Morbi justo risus, laoreet non mauris in, euismod dictum neque. Aliquam mattis nisi quis sollicitudin gravida. In sit amet purus vel leo tempus tincidunt."
                    timestamp="MM/DD 00:00"
                    displayName="Coordinator Emrecan"
                  />
                  <MessageRight
                    message="Vestibulum vitae diam augue."
                    timestamp="MM/DD 00:00"
                    displayName="Giada"
                  />
                  <MessageLeft
                    message="Morbi justo risus, laoreet non mauris in, euismod dictum neque. Aliquam mattis nisi quis sollicitudin gravida. In sit amet purus vel leo tempus tincidunt."
                    timestamp="MM/DD 00:00"
                    displayName="Coordinator Emrecan"
                  />
                  <MessageRight
                    message="Vestibulum vitae diam augue."
                    timestamp="MM/DD 00:00"
                    displayName="Giada"
                  />
                </Paper>
                <TextInput />
              </Paper>
            </div>
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
export default ChatPage;
