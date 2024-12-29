import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "purple" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Event Manager
          </Typography>

          <Button
            color="inherit"
            component={Link}
            to="/login"
            style={{
              border: "2px solid black",
              backgroundColor: "blue",
              marginRight: "3px",
            }}
          >
            Login
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/signup"
            style={{ border: "2px solid black", backgroundColor: "blue" }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <center>
        <div>
          <h2 style={{ fontFamily: "monospace" }}>
            Welcome to Our Event Management App!
          </h2>
          <h5>
            Our Services build our Trust.So we hope you get every thing related
            to event, which makes your event beautiful.
          </h5>
          <hr />
        </div>
      </center>
    </>
  );
};

export default Navbar;
