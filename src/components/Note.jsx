import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import React,{useState} from "react";
import "../styles/home.scss";
import { useSelector } from "react-redux";

import { styled } from "@mui/material/styles";

const Cards = styled(Card)`
  &:hover {
    background:#e6e8e6;
  }
`;

const Note = ({handleUpdate}) => {
 
  const myNotes = useSelector((state) => state.allNotes.filteredNotes);
  const listView = useSelector((state) => state.allNotes.listView)
  console.log("My NOtes", myNotes);
    return (
      <Box className="main-container">
        <Grid container spacing={4} justifyContent={listView?"center":null} >
          {myNotes.map((item, index)=> {
            return(
              <Grid item xs={12} sm={6} md={listView?8:3} key={item._id}>
              <Cards onClick={() => handleUpdate(item,index)}>
                <CardContent>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {item.content}
                  </Typography>
                </CardContent>
              </Cards>
            </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  };
  
  export default Note;