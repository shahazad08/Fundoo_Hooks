import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import Note from "../components/Note";
import noteService from "../service/noteService";

import { useDispatch } from "react-redux";
import { setNotes } from "../actions/noteActions";



const Dashboard = () => {
    const [open, setOpen] = useState(false);
    // const [note, setNote] = useState([]);
    // const [filteredNote, setFilteredNote] = useState([]);
    // const [search, setSearch] = useState("");
    const [title,setTitle] = useState('Fundoo Note')

    const dispatch = useDispatch()


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
          // setNote(res.data.message);
          dispatch(setNotes(res.data.message))
        })
        .catch((err) => {
          console.log(err);
        });
    };
    // useEffect(() => {
    //   setFilteredNote(
    //     note.filter((item) => {
    //       return item.title.toLowerCase().includes(search.toLowerCase());
    //     })
    //   );
    // }, [search, note]);

    const handleDrawerOpen = () => {
      console.log("App bar open", open);
        setOpen((prevStates) => {
          return !prevStates;
        });
      };
    

    return (
        <Box sx={{ display: "flex" }}>
          <Appbar handleDrawerOpen={handleDrawerOpen}  title={title}/>
          <Sidebar open={open} handleTitle={handleTitle} handleDrawerOpen={handleDrawerOpen}/>
          <Box component="main" sx={{ flexGrow: 1, p: 3, margin: "5% auto" }}>
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