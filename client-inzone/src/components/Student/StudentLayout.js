import * as React from "react";
import HomeScreen from "./HomeScreen";
import ChatScreen from "./ChatScreen";
import NotificationScreen from "./NotificationScreen";
import ExamsScreen from "./ExamsScreen";
import ProgressScreen from "./ProgressScreen";
import {
  Chat,
  Home,
  Notifications,
  Assignment,
  AddRoad,
} from "@mui/icons-material";
import {
  Box,
  CssBaseline,
  BottomNavigation,
  BottomNavigationAction,
  Paper
} from "@mui/material";

const StudentLayout = () => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  const showPages = () => {
    if (value === 0) {
      return <HomeScreen />;
    } else if (value === 1) {
      return <ChatScreen ref={ref} />;
    } else if (value === 2) {
      return <NotificationScreen />;
    } else if (value === 3) {
      return <ExamsScreen />;
    } else if (value === 4) {
      return <ProgressScreen />;
    }
  };

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      {showPages()}
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="Chat" icon={<Chat />} />
          <BottomNavigationAction
            label="Notifications"
            icon={<Notifications />}
          />
          <BottomNavigationAction label="Exams" icon={<Assignment />} />
          <BottomNavigationAction label="Progress" icon={<AddRoad />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default StudentLayout;
