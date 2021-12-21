import styled from "styled-components";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Icon from "../components/cheemsking/Icon";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import './Cheemsking.css'
import name from "../assets/name.png"
import minicheems from "../assets/minicheems.png"
import logo from "../assets/Asset1.svg"
import DataTable from "../components/cheemsking/DataTable";
import Footer from "../components/cheemsking/Footer";

const useStyles = makeStyles((theme) => ({
    container: {
        // backgroundImage: "url(../assets/backGround.jpg)"
        // flex: 1,
        // color: "gold",
        // fontFamily: "Montserrat",
        // fontWeight: "bold",
        // cursor: "pointer",
    },
    iconContainer: {

    }
}));

const cheemskingTheme = createTheme({
    palette: {
    primary: {
        main: "#fff",
    },
    type: "dark",
    },
});

export default function HomePage() {
    const classes = useStyles();

    const TelegramBackground = "#16BFFD";
    const TwitterBackground = "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

    return (
        <ThemeProvider theme={cheemskingTheme}>
            <Grid container className='container-cheemsking'>
                <Grid item xs={12}>
                    <h1 className="text-center mt-5">
                        <img src={name} alt="" style={{width: '80%'}} className="bounce-in-fwd"/>
                    </h1>
                </Grid>
                <Grid container className="my-5" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <div className="card mx-auto">
                            <div className="h1">Hello sir...</div>
                            <p className="px-2">
                            I may be hard to see because of my size but don't let that fool you! I am Cheems King and I pack a punch!! Watch me moon a chart like my older siblings! Don't be late and fomo in on my giant project, now mooning on Binance Smart Chain! And stop by the telegram to say hello!
                            </p>
                            <HorizontalRule />
                            <IconsContainer className={classes.iconContainer}>
                                <Icon color={TelegramBackground}>
                                    <a className="text-white" href="https://t.me/#"><FaTelegram /></a>
                                </Icon>
                                <Icon color={TwitterBackground}>
                                    <a className="text-white" href="https://twitter.com/Cheems_King">
                                        <FaTwitter />
                                    </a>
                                </Icon>
                            </IconsContainer>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h1 className="text-center">
                            <img src={minicheems} className="rotate-in-diag-1" style={{height: '568px'}} alt=""/>
                        </h1>
                    </Grid>
                </Grid>

                <Grid container id="Tokenomics" className="mb-5" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <h1 className="text-center">
                            <img className="swirl-in-fwd" src={logo} style={{height: '568px'}} alt=""/>
                        </h1>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <DataTable />
                    </Grid>
                </Grid>

                <Grid container item className="pb-2" xs={12}>
                    <Grid item className="pb-2 border mx-auto" xs={12} md={6}>
                        <h1 className="text-center my-auto">Video</h1>
                    </Grid>
                </Grid>

                <Grid item className="pb-2" xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

const HorizontalRule = styled.hr`
    width: 90%;
    height: 0.3rem;
    border-radius: 0.8rem;
    border: none;
    background: linear-gradient(to right, #14163c 0%, #03217b 79%);
    background-color: #ebd0d0;
    margin: 1.5rem 0 1rem 0;
    backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0 3rem 0;
    width: 80%;
`;
