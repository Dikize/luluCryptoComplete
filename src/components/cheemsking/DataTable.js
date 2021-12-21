import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardTable: {
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'rgba(255, 255, 255, 0.15)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(8.5px)',
        borderRadius: '10px',
        color: '#ffffff',
        textTransform: 'uppercase',
        letterSpacing: '0.4rem',
        width: '100%',
        transition: 'all 1s',
        '&:hover': {
            transform: 'translateY(-20px)'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        },
    },
    cardTableItemContainer: {
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        },
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

// const cheemskingTheme = createTheme({
//     palette: {
//     primary: {
//         main: "#fff",
//     },
//     type: "dark",
//     },
// });

export default function DataTable() {
    const classes = useStyles();

    return (
        <Grid container className={classes.cardTable}>
            <Grid container item xs={12} md={6} className={classes.cardTableItemContainer}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem >
                        <h4 className="text-decoration-underline">BUY TAX: 15%</h4>
                    </ListItem>
                    <Grid item xs={12}>
                        <ListItem >
                            <ListItemAvatar className={classes.listItemAvatar}>
                                <Avatar className={classes.listAvatar}>
                                    2%
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText className={classes.listItemText} primary="Liquidity"/>
                        </ListItem>
                    </Grid>
                    <ListItem >
                        <ListItemAvatar className={classes.listItemAvatar}>
                            <Avatar className={classes.listAvatar}>
                                5% 
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText className={classes.listItemText} primary="Vacation"/>
                    </ListItem>
                    <ListItem >
                        <ListItemAvatar className={classes.listItemAvatar}>
                            <Avatar className={classes.listAvatar}>
                                4%
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText className={classes.listItemText} primary="Marketing"/>
                    </ListItem>
                    <ListItem >
                        <ListItemAvatar className={classes.listItemAvatar}>
                            <Avatar className={classes.listAvatar}>
                                4%
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText className={classes.listItemText} primary="Buy-Back"/>
                    </ListItem>
                </List>    
            </Grid>

            <Grid container item xs={12} md={6} className={classes.cardTableItemContainer}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem >
                        <h4 className="text-decoration-underline">SELL TAX: 20%</h4>
                    </ListItem>

                    <ListItem >
                        <ListItemAvatar className={classes.listItemAvatar}>
                            <Avatar className={classes.listAvatar}>
                                6%
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText className={classes.listItemText} primary="Liquidity"/>
                    </ListItem>
                    <ListItem >
                        <ListItemAvatar className={classes.listItemAvatar}>
                            <Avatar className={classes.listAvatar}>
                                5% 
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText className={classes.listItemText} primary="Rewards"/>
                    </ListItem>
                    <ListItem >
                        <ListItemAvatar className={classes.listItemAvatar}>
                            <Avatar className={classes.listAvatar}>
                                4%
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText className={classes.listItemText} primary="Marketing"/>
                    </ListItem>
                    <ListItem >
                        <ListItemAvatar className={classes.listItemAvatar}>
                            <Avatar className={classes.listAvatar}>
                                5%
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText className={classes.listItemText} primary="Buy-Back"/>
                    </ListItem>
                </List>    
            </Grid>
        </Grid>
    );
}