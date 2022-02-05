import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import Note from "../components/Note";
import noteService from "../service/noteService";

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [note, setNote] = useState([]);

    useEffect(() => {
      fetchitem();
    }, []);

    const fetchitem = () => {
      noteService
        .getNotes()
        .then((res) => {
          setNote(res.data.message);
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
          <Box component="main" sx={{ flexGrow: 1, p: 3, margin: "5% auto" }}>
            <Note notes={note}/>
          </Box>
        </Box>
      );
    };
    
    export default Dashboard;