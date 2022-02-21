import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import Note from "../components/Note";
import noteService from "../service/noteService";
import { useDispatch } from "react-redux";
import { setNotes } from "../actions/noteActions";
import AddNote from "../components/AddNote";
import "../styles/home.scss";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()


  useEffect(() => {
    fetchitem();
  }, []);

  const fetchitem = () => {
    noteService
      .getNotes()
      .then((res) => {
        // setNote(res.data.message);
        dispatch(setNotes(res.data.message))
      })
      .catch((err) => {
        console.log(err);
      });
  };
 

  const handleDrawerOpen = () => {
    console.log("App bar open", open);
    setOpen((prevStates) => {
      return !prevStates;
    });
  };

  

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} />
      <Box component="main" className="note-container">
        <AddNote/>
        <Note/>
      </Box>
     
    </Box>
  );
};

export default Dashboard;


    // const handleSearch = (searchValue) => {
    //   console.log("Search Value", searchValue);
    //   setSearch(searchValue);
    // };