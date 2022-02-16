import React, { useState } from "react";
import { Paper, InputBase, Button, Grid } from "@mui/material";
// import service from "../service/noteService";
import { useDispatch } from "react-redux";
import { addNewNote } from "../actions/noteActions";

const AddNote = () => {
    const [click, setClick] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //const dispatch = useDispatch();

  const handleClose = () => {
    setClick(false);
  }
  return (
    <Paper className="add-note-container" elevation={5}>
      <InputBase
        type="text"
        placeholder={click ? "Title" : "Take a note..."}
        fullWidth
        inputProps={{
          style: { height: "36px" },
        }}
        onFocus={() => setClick(true)}
        onChange={(e) => setTitle(e.target.value)}
      />
      {click && (
        <Grid container>
          <Grid item xs={12}>
            <InputBase
              type="text"
              placeholder="Take a note..."
              fullWidth
              multiline={true}
              inputProps={{
                style: { height: "36px" },
              }}
              onChange={(e) => setContent(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} align="right">
            <Button
              style={{ color: "black", textTransform: "none" }}
            //  onClick={handleAddNotes}
            >
              Submit
            </Button>
            <Button
              style={{ color: "black", textTransform: "none" }}
              onClick={handleClose}
            >
              Close
            </Button>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};
export default AddNote;