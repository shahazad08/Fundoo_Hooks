import React, { useState, useEffect } from "react";
import noteService from "../service/noteService";
import { Box } from "@mui/material";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import { useDispatch } from "react-redux";
import { setTrashNotes } from "../actions/noteActions";
import "../styles/home.scss";
import Trash from "../components/Trash";

const Bin = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();


  const handleDrawerOpen = () => {
    setOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} />
      <Box component="main" className="note-container">
        <Trash />
      </Box>
    </Box>
  );
};

export default Bin;