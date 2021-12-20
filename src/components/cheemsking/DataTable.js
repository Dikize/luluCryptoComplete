import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
        <Grid container className="card-table mx-auto">
            <Grid container item xs={6}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem >
                        <h4>BUY TAX: 15%</h4>
                        {/* <ListItemText primary="BUY TAX: 15%"/> */}
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

            <Grid item xs={6}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem >
                        <ListItemText className={classes.listItemText} primary="SELL TAX: 20%"/>
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