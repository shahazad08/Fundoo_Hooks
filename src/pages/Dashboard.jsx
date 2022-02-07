import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import Note from "../components/Note";
import noteService from "../service/noteService";



const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [note, setNote] = useState([]);
    const [filteredNote, setFilteredNote] = useState([]);
    const [search, setSearch] = useState("");
    const [title,setTitle] = useState('Fundoo Note')

    const handleSearch = (searchValue) => {
      console.log("Search Value", searchValue);
      setSearch(searchValue);
    };

    function handleTitle(title) {
    console.log("Set Title", title);
    setTitle(title);
  }

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

    useEffect(() => {
      setFilteredNote(
        note.filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase());
        })
      );
    }, [search, note]);

    const handleDrawerOpen = () => {
      console.log("App bar open", open);
        setOpen((prevStates) => {
          return !prevStates;
        });
      };
    

    return (
        <Box sx={{ display: "flex" }}>
          <Appbar handleDrawerOpen={handleDrawerOpen} handleSearch={handleSearch} title={title}/>
          <Sidebar open={open} handleTitle={handleTitle}/>
          <Box component="main" sx={{ flexGrow: 1, p: 3, margin: "5% auto" }}>
            <Note notes={filteredNote}/>
          </Box>
        </Box>
      );
    };
    
    export default Dashboard;