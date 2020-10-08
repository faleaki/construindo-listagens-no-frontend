import * as React from 'react';
import { AppBar, Button, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import logo from '../../static/img/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import {Menu} from "./Menu";

const useStyles = makeStyles( (theme: Theme) => ({
    toolbar: {
        backgroundColor: '#000000'
    },
    title: {
        flexGrow: 1,
        textAlign: 'center'
    },
    logo: {
        width: 100,
        [theme.breakpoints.up('sm')]: {
            width: 170
        }
    }
}));

export const Navbar: React.FC = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event:any) => setAnchorEl(event.currentTarget);
    const handleClose = (event:any) => setAnchorEl(null);

    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Menu/>
                <Typography className={classes.title}>
                    <img src={logo} alt="CodeFlix" className={classes.logo}/>
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};