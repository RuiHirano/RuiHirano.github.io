import React, { useContext, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Drawer, IconButton, InputBase, List, ListItem, ListItemText, ListItemIcon, Divider } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import useSelector, { SelectorData } from '../../hooks/useSelector';
import { IntlContext } from '../../intl/provider';

const Header: React.FC = () => {
    const classes = useStyles()
    const { changeLanguage } = useContext(IntlContext);
    const { renderSelector } = useSelector(changeSelector)
    function changeSelector({ label, value }: SelectorData) {
        console.log("change2", label, value)
        changeLanguage(value)
    }

    return (
        <div style={{ height: 50 }}>
            <AppBar variant={"outlined"} position={"absolute"} elevation={0} className={classes.app_bar}>
                <Toolbar variant="dense">
                    <Button onClick={() => { }}>
                        <Typography className={classes.title} noWrap>
                            Rui Hirano
                    </Typography>
                    </Button>
                    {renderSelector()}
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
        backgroundColor: 'white',
    },
}));