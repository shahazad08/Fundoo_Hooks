import React from "react";
import { styled } from "@mui/material/styles";
import keepImage from "../assets/google_keep.png";
import {
  Toolbar,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import SplitscreenOutlinedIcon from "@mui/icons-material/SplitscreenOutlined";
import "../styles/home.scss";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  spacing: 2,
}));

const Appbar = ({ handleDrawerOpen,handleSearch,title }) => {
  return (
    <AppBar position="fixed">
      <Toolbar style={{ color: "rgba(0, 0, 0, 0.54)" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: "30px",
          }}
        >
          <MenuIcon />
        </IconButton>
        <img src={keepImage} alt="" style={{width: "2em", height: "2.5em" }} />
        <Typography variant="h6" noWrap style={{ fontWeight: "bold", marginLeft: "10px" }} component="div">
         {title}
        </Typography>
        <TextField
          placeholder="Search…"
          style={{ width: "50%", margin: "auto" }}
          variant="outlined"
          size="small"
          onChange={e => handleSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon/>
              </InputAdornment>
            ),
            style: { height: "44px" },
          }}
        />
          <RefreshOutlinedIcon fontSize="medium" style={{ marginLeft: "15px" }} />
        <SplitscreenOutlinedIcon
          fontSize="medium"
          style={{ marginLeft: "15px" }}
        />
        <SettingsOutlinedIcon
          fontSize="medium"
          style={{ marginLeft: "15px" }}
        />
        <div className="appbar-div">
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", marginRight: "5px" }}
          >
            Fundoo
          </Typography>
          <AccountCircleIcon fontSize="large" />
        </div>
        
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;