import React, { Component } from "react";
import { AppBar } from "@mui/material";
import {Toolbar} from "@mui/material";
import {IconButton} from "@mui/material";
import {Typography} from "@mui/material";
import {InputBase} from "@mui/material";
import {Switch} from "@mui/material";
import { Search } from "@mui/icons-material";
import {withStyles} from "@mui/material";
import { ClassNames } from "@emotion/react";
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="root">
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton className="menuButton" color="inherit">
                            <span>flag</span>
                        </IconButton>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className="title"
                        >
                            App Title
                        </Typography>
                        <Switch />
                        <div className="grow"/>
                        <div className="search">
                            <div className="searchIcon">
                                <Search />
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Navbar;