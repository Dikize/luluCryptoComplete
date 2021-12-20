import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import IconFooter from "./IconFooter";
import logo from "../../assets/Asset1.svg"
import buyButton from "../../assets/buy-button.png"
import { FaTwitter, FaTelegram } from "react-icons/fa";
import { FcComboChart } from "react-icons/fc";

const TelegramBackground = "#16BFFD";
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
            <Grid item xs={3}><img className="bounce-in-fwd" src={logo} style={{height: '315px'}} alt=""/></Grid>
            <Grid container item xs={2} justifyContent="center">
                <IconFooter color={TelegramBackground} style={{height: '55px', width: '55px'}} className={classes.icon}>
                    <a className="text-white" href="https://t.me/#">
                        <FaTelegram />
                    </a>
                </IconFooter>
            </Grid>
            <Grid container item xs={2} justifyContent="center">
                <IconFooter color={TwitterBackground} className={classes.icon}>
                    <a className="text-white" href="https://twitter.com/Cheems_King">
                        <FaTwitter />
                    </a>
                </IconFooter>
            </Grid>
            <Grid container item xs={2} justifyContent="center">
                <IconFooter color={TwitterBackground} className={classes.icon}>
                    <a className="text-white" href="https://poocoin.app/tokens/0x000">
                        <FcComboChart />
                    </a>
                </IconFooter>
            </Grid>
            <Grid container item xs={3} justifyContent="center">
                <IconFooter color={TwitterBackground} className={classes.icon}>
                    <a className="text-white" href="https://pancakeswap.finance/swap?outputCurrency=0x000">
                        <img src={buyButton} alt=""/>
                    </a>
                </IconFooter>
            </Grid>
        </Grid>
    );
}