import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    IconButton,
  } from "@mui/material";
  import React, { useState } from "react";
  import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
  import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
  import "../styles/home.scss";
  import { useSelector } from "react-redux";
  import { styled } from "@mui/material/styles";
  import noteService from "../service/noteService";
  import { useDispatch } from "react-redux";
  import { removeTrashNote } from "../actions/noteActions";
  
  const Trash = () => {
    const myNotes = useSelector((state) => state.allNotes.trash);
    const listView = useSelector((state) => state.allNotes.listView);
    const [hover, setHover] = useState([]);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        console.log("Delete Note", id);

    };
  
 
  
    return (
      <Box className="main-container">
        <Typography
          style={{ fontStyle: "italic", marginBottom: "20px", fontSize: "17px" }}
        >
          Notes in Trash are deleted after 7 days.
        </Typography>
        <Grid container spacing={4} justifyContent={listView ? "center" : null}>
        
        </Grid>
      </Box>
    );
  };
  
  export default Trash;