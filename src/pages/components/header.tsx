import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Drawer, IconButton, InputBase, List, ListItem, ListItemText, ListItemIcon, Divider } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

const Header: React.FC = () =>{

return (
    <div className={classes.grow}>

            <MainDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            <AppBar position="static" className={classes.app_bar}>
                <Toolbar>
                    <Button onClick={toUserHome}>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Rui Hirano
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
)
}
export default Header

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        color: 'black',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    app_bar: {
        backgroundColor: 'white'
    },
}));