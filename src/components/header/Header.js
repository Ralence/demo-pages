import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import logo from '../../assets/logo.png';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    header: {
        flexGrow: 1,
        height: '70px',
        backgroundColor: 'white',
        fontFamily: 'roboto',
        color: '#293059',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    img: {
        height: '60px',
        width: '150px',
        margin: "5px",
        marginLeft: '20px'
    },
    title: {
        display: 'inline-block',
        marginRight: '20px'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar elevation={1} className={classes.header} position="static">
                <img className={classes.img} src={logo} alt='gigaaa logo' />

                <Typography variant="h6" className={classes.title}>
                    Demo pages
          </Typography>
            </AppBar>
        </div>
    );
}
