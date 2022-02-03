import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Appbar from "../components/Appbar";

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [note, setNote] = useState([]);

    const handleDrawerOpen = () => {
        setOpen((prevState) => {
          return !prevState;
        });
      };

    return (
        <Box sx={{ display: "flex" }}>
          <Appbar handleDrawerOpen={handleDrawerOpen} />
          {/* <Sidebar open={open} /> */}
          <Box component="main" sx={{ flexGrow: 1, p: 3, margin: "5% auto" }}>
            {/* <Note notes={note} /> */}
          </Box>
        </Box>
      );
    };
    
    export default Dashboard;