import React, { useState } from "react";
import { Paper, InputBase, Button, Grid, Tooltip } from "@mui/material";
import service from "../service/noteService";
import { useDispatch } from "react-redux";
import { addNewNote } from "../actions/noteActions";

const AddNote = () => {
    const [click, setClick] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    const handleClose = () => {
        setClick(false);
    }

    const handleAddNotes = () => {
        let data = {
          title: title,
          content: content,
        };
        service
          .setNotes(data)
          .then((res) => {
            if (res.data.status === 200) {
                console.log("Date Enterter from Front end", res.data.message);
              dispatch(addNewNote(res.data.message))
            } else {
              console.log(res);
            }
          })
          .catch((err) => console.log(err.message));
      };
    return (
        <Paper className="add-note-container" elevation={5} style={{borderRadius:"8px"}}    >
            <InputBase
                type="text"
                placeholder={click ? "Title" : "Take a note..."}
                fullWidth
                inputProps={{
                    style: { minHeight: "36px" },
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
                                style: { minHeight: "36px" },
                            }}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} align="right">
                    <Tooltip title="Submit">
                        <Button
                            style={{ color: "black", textTransform: "none" }}
                            onClick={handleAddNotes}
                        >
                            Submit
                        </Button>
                        </Tooltip>
                        <Tooltip title="Close">
                        <Button
                            style={{ color: "black", textTransform: "none" }}
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                        </Tooltip>
                    </Grid>
                </Grid>
            )}
        </Paper>
    );
};
export default AddNote;