import { Box, Grid, Card, CardContent, Typography, CardActionArea,  IconButton,
  Snackbar,
  Button} from "@mui/material";
import React, { useState } from "react";
import "../styles/home.scss";
import { useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import Popup from "../components/Popup";
import NoteFooter from "./NoteFooter";
import CloseIcon from "@mui/icons-material/Close";


const Note = () => {

  const myNotes = useSelector((state) => state.allNotes.filteredNotes);
  const listView = useSelector((state) => state.allNotes.listView)
  const [isOpen, setIsOpen] = useState(false);
  const [updateData, setUpdateData] = useState({});
  const [hover, setHover] = useState([]);
  const [open, setOpen] = useState(false);
  const [undoItem, setundoItem] = useState("");

  const handleOpenSnackBar = (item) => {
    setOpen(true);
    setundoItem(item);
  };

  const handleCloseSnackBar = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button size="small"  style={{color:"yellow"}}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
         onClick={handleCloseSnackBar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleUpdate = (item, index) => {
    console.log("Handle Update from Dashboard", item);  // Component data passing from Note to Popup
    let data = {
      index: index,
      item: item
    }
    setUpdateData(data);
    setIsOpen(!isOpen);
  };

  const handleClose = (item) => {
    setIsOpen(!isOpen);
  };
  console.log("My NOtes", myNotes);
  return (
    <Box className="main-container">
      <Grid container spacing={4} justifyContent={listView ? "center" : null} >
        {myNotes.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={listView ? 8 : 3} key={item._id}>
              <Card
                elevation={hover[index] ? 6 : 1}
                onMouseEnter={() => {
                  setHover({ [index]: true });
                }}
                onMouseLeave={() => {
                  setHover({ [index]: false });
                }}
              >
                <CardContent onClick={() => handleUpdate(item, index)}>

                  <Typography variant="h5">{item.title}</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.content}
                  </Typography>
                </CardContent>
                {hover[index] ? (
                  <NoteFooter item={item} index={index} handleOpenSnackBar={handleOpenSnackBar}/>
                ) : (
                  <div style={{ height: "35px" }}></div>
                )}


              </Card>
            </Grid>
          );
        })}
      </Grid>
      {isOpen && <Popup handleClose={handleClose} item={updateData} />}

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
        message="Note Trashed"
        action={action}
      />
    </Box>
  );
};

export default Note;