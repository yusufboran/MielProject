import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems } from "./listItems";
import ProjectCard from "./List/ProjectCard";
import ProjectList from "./List/List";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

const projectsData = [
  {
    title: "Project 1",
    information:
      "Veniam laboris pariatur pariatur veniam proident sit. Aliquip deserunt reprehenderit proident deserunt velit non. Eu enim minim elit adipisicing magna ullamco dolore aliquip in mollit adipisicing occaecat sit. Quis dolor ipsum aute culpa minim aliqua.Esse magna nisi culpa laborum sunt cillum aute deserunt. Eiusmod fugiat dolor dolore duis ad et officia do in veniam aliqua aliqua. Sint dolore culpa voluptate in cupidatat sit culpa velit. Laboris consectetur nisi dolore deserunt esse occaecat eiusmod eiusmod aute dolore labore veniam exercitation.",
    imgUrl:
      "https://images.unsplash.com/photo-1659535824233-966cc8de61a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  },
  {
    title: "Project 2",
    information:
      "Amet duis non tempor est irure anim laborum anim voluptate veniam Lorem duis.Occaecat qui dolor qui consectetur laborum dolore enim eu sint commodo voluptate aliqua nostrud eu. Laborum culpa ea nisi exercitation dolor reprehenderit anim non irure et",
    imgUrl:
      "https://images.unsplash.com/photo-1666756240261-d2a79080c069?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80",
  },
  {
    title: "Project 3",
    information:
      "Quis consectetur quis minim cupidatat et.Exercitation proident anim deserunt officia officia veniam exercitation minim.",
    imgUrl:
      "https://images.unsplash.com/photo-1666214280259-ab57309450b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Project 2",
    information:
      "Amet duis non tempor est irure anim laborum anim voluptate veniam Lorem duis.Occaecat qui dolor qui consectetur laborum dolore enim eu sint commodo voluptate aliqua nostrud eu. Laborum culpa ea nisi exercitation dolor reprehenderit anim non irure et",
    imgUrl:
      "https://images.unsplash.com/photo-1666756240261-d2a79080c069?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80",
  },
  {
    title: "Project 3",
    information:
      "Quis consectetur quis minim cupidatat et.Exercitation proident anim deserunt officia officia veniam exercitation minim.",
    imgUrl:
      "https://images.unsplash.com/photo-1666214280259-ab57309450b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Project 3",
    information:
      "Quis consectetur quis minim cupidatat et.Exercitation proident anim deserunt officia officia veniam exercitation minim.",
    imgUrl:
      "https://images.unsplash.com/photo-1666214280259-ab57309450b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{mainListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {projectsData.map((data) => (
                <Grid item xs={4}>
                  <ProjectCard data={data} />
                </Grid>
              ))}

              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <ProjectList />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
