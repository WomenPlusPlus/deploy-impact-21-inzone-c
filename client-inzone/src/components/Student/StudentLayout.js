import * as React from "react";
import HomePage from "./HomePage";
import ChatPage from "./ChatPage";
import NotificationPage from "./NotificationPage";
import ExamsPage from "./ExamsPage";
import ProgressPage from "./ProgressPage";
import {
  Chat,
  Home,
  Notifications,
  Assignment,
  AddRoad,
  ArrowBack,
  Search as SearchIcon,
  Menu,
  Logout,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  CssBaseline,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { useHistory } from "react-router-dom";

//THESE LINES WILL IMPROVE, SEARCHING FUNCTIONALITY
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
//THESE LINES WILL IMPROVE, SEARCHING FUNCTIONALITY

const StudentLayout = () => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const history = useHistory();

  const showHeader = () => {
    if (value === 0) {
      return (
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <Settings />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                textAlign: "center",
                flexGrow: 1,
                display: { xs: "block", sm: "block" },
              }}
            >
              DASHBOARD
            </Typography>
            <IconButton
              size="large"
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                localStorage.removeItem("userInformation");
                history.push("/login")
              }}
            >
              <Logout />
            </IconButton>
            {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          </Toolbar>
        </AppBar>
      );
    } else if (value === 1) {
      return (
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <ArrowBack />
            </IconButton>
            {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ textAlign: "center",  flexGrow: 1, display: { xs: "block", sm: "block" } }}
            >
              CHAT
            </Typography> */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      );
    } else if (value === 2) {
      return (
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <ArrowBack />
            </IconButton> */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                textAlign: "center",
                flexGrow: 1,
                display: { xs: "block", sm: "block" },
              }}
            >
              NOTIFICATIONS
            </Typography>
            {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          </Toolbar>
        </AppBar>
      );
    } else if (value === 3) {
      return (
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <ArrowBack />
            </IconButton> */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                textAlign: "center",
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
              }}
            >
              EXAMS
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      );
    } else if (value === 4) {
      return (
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <ArrowBack />
            </IconButton> */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                textAlign: "center",
                flexGrow: 1,
                display: { xs: "block", sm: "block" },
              }}
            >
              COURSE PROGRESS
            </Typography>
            {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          </Toolbar>
        </AppBar>
      );
    }
  };
  // const showPage = () => {
  //   if (value === 0) {
  //     return <HomePage />;
  //   } else if (value === 1) {
  //     return <ChatPage ref={ref} />;
  //   } else if (value === 2) {
  //     return <NotificationPage />;
  //   } else if (value === 3) {
  //     return <ExamsPage />;
  //   } else if (value === 4) {
  //     return <ProgressPage />;
  //   }
  // };
  // const showBottom = () => {
  //   return (
  //     <Paper
  //       sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
  //       elevation={3}
  //     >
  //       <BottomNavigation
  //         showLabels
  //         value={value}
  //         onChange={(event, newValue) => {
  //           setValue(newValue);
  //         }}
  //       >
  //         <BottomNavigationAction label="Home" icon={<Home />} />
  //         <BottomNavigationAction label="Chat" icon={<Chat />} />
  //         <BottomNavigationAction
  //           label="Notifications"
  //           icon={<Notifications />}
  //         />
  //         <BottomNavigationAction label="Exams" icon={<Assignment />} />
  //         <BottomNavigationAction label="Progress" icon={<AddRoad />} />
  //       </BottomNavigation>
  //     </Paper>
  //   );
  // };

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      {/* {showHeader()}
      {showPage()}
      {showBottom()} */}
    </Box>
  );
};

export default StudentLayout;
