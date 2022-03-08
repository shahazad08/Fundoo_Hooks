import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import Note from "../components/Note";
import noteService from "../service/noteService";
import { useDispatch } from "react-redux";
import { setNotes,setTrashNotes } from "../actions/noteActions";
import AddNote from "../components/AddNote";
import "../styles/home.scss";
import { useSelector } from "react-redux";
import Trash from "../components/Trash";


const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const title = useSelector((state) => state.allNotes.title);
  


  useEffect(() => {
    fetchitem();
  }, []);

  const fetchitem = () => {
    noteService
      .getNotes()
      .then((res) => {
        // setNote(res.data.message);
       // dispatch(setNotes(res.data.message))
      //  dispatch(setNotes(res.data.message.filter(item => !item.isTrash)));
      dispatch(setNotes(res.data.message.filter((item) => !item.isTrash)));
      // dispatch(
      //   setTrashNotes(res.data.message.filter((item) => item.isTrash))
      // );
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

  // const renderOption = () => {
  //   console.log("Render Options",title);
  //   switch (title) {
  //     case "Notes":
  //       return (
  //         <>
  //           <AddNote />
  //           <Note />
  //         </>
  //       );
  //     case "Trash":
  //       return <Trash />;
  //     default:
  //       return (
  //         <>
  //           <AddNote />
  //           <Note />
  //         </>
  //       );
  //   }
  // };

  

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} />
      <Box component="main" className="note-container">
        <AddNote/>
        <Note/>
       {/* // {renderOption()} */}
      </Box>
     
    </Box>
  );
};

export default Dashboard;


    // const handleSearch = (searchValue) => {
    //   console.log("Search Value", searchValue);
    //   setSearch(searchValue);
    // };