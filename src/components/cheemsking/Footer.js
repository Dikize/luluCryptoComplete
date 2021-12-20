import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import IconFooter from "./IconFooter";
import logo from "../../assets/Asset1.svg"
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { FcComboChart } from "react-icons/fc";

const FacebookBackground = "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
const InstagramBackground = "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
const TwitterBackground = "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

const useStyles = makeStyles((theme) => ({
    '.hQMcNv': {
        height: '7.5rem',   
        width: '7.5rem',    
    },
    listItemText: {
        textAlign: "center",

    },
    listItemAvatar: {
        textAlign: '-webkit-right',
    },
    listAvatar: {
        textAlign: '-webkit-right',
        width: '55px',
        height: '55px',
    }
}));


export default function Footer() {
    const classes = useStyles();

    return (
        <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={3}><img className="swirl-in-fwd" src={logo} style={{height: '315px'}} alt=""/></Grid>
            <Grid container item xs={3} justifyContent="center">
                <IconFooter color={FacebookBackground} style={{height: '55px', width: '55px'}} className={classes.icon}>
                    <FaTelegram />
                </IconFooter>
            </Grid>
            <Grid container item xs={2} justifyContent="center">
                <IconFooter color={InstagramBackground} className={classes.icon}>
                    <FaInstagram />
                </IconFooter>
            </Grid>
            <Grid container item xs={2} justifyContent="center">
                <IconFooter color={TwitterBackground} className={classes.icon}>
                    <FcComboChart />
                </IconFooter>
            </Grid>
            <Grid item xs={2}>
                <IconFooter color={TwitterBackground} className={classes.icon}>
                    <FcComboChart />
                </IconFooter>
            </Grid>
        </Grid>
    );
}