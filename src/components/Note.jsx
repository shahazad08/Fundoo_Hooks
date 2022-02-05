import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "../styles/home.scss";

const Note = () => {
    return (
      <Box className="main-container">
        <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h5">My First NOte</Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                     Note 1
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default Note;