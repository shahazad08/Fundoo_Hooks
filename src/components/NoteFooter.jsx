import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import service from "../service/noteService";
import { useDispatch } from "react-redux";
import { addTrashNote } from "../actions/noteActions";


const NoteFooter = ({ item }) => {
    const dispatch = useDispatch();
    
  const handleTrash = () => {
      console.log("Clicked Trash");
   
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <IconButton size="small">
        <ColorLensOutlinedIcon />
      </IconButton>
      <IconButton size="small">
        <InsertPhotoOutlinedIcon />
      </IconButton>
      <IconButton size="small" onClick={handleTrash}>
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </div>
  );
};

export default NoteFooter;