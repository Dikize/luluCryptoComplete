import React, {useState} from 'react'
import { AppBar, MenuItem, Menu, Toolbar, Typography, Box, IconButton } from "@material-ui/core";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
// import  MenuIcon  from "@material-ui/icons/Menu";
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom';
import logo from '../assets/name.png'

const useStyles = makeStyles((theme) => ({
  appBar: {
    paddingLeft: '0',
    padding: '10px 0',
  },
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  logo: {
    width: '83%',
    height: '110px',
    [theme.breakpoints.down('xs')]: {
      height: "56px"
    },
  },
  link: { 
    color: '#fff',
    fontSize: 'large',
    margin:'0 10px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: '2s',

    '&::after': {
      content: '""',
      display: 'block',
      margin: '0 auto',
      width: '0%',
      height: '2px',
      background: '#f1f1f1',
      transition: 'width 0.8s ease-in-out',
    },
    '&:hover::after': {
      width: '100%'
    }
  }
}));

const darkTheme = createTheme({
  palette: {
    // primary: {
    //   // main: "#fff",
    // },
    type: "dark",
  },
});
const pages = [
  {
    name: 'Tokenomics',
    link: '#Tokenomics'

  }, 
  {
    name: 'Poocoin	Chart',
    link: 'https://poocoin.app/tokens/0x00'
  }, 
  {
    name: 'Telegram',
    link: 'https://t.me/#'
  },
  {
    name: 'Crypto info',
    link: 'https://rimkchasseur.netlify.app/pageGetCoins',
  }
];

function Header() {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" className={classes.appBar} position="static">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="me-auto"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img className={classes.logo} src={logo} alt=""/>
          </Typography>

          <Box className="me-auto" sx={{ flexGrow: 1, justifyContent: 'right', paddingRight:'10px', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
              
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page} 
                  conponent={Link}
                  to={page.link} 
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center"><a href={page.link}>{page.name}</a></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className="me-auto" sx={{ flexGrow: 1, justifyContent: 'right', paddingRight:'10px', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <MenuItem
                key={page}
                conponent={Link}
                to={page.link}
                onClick={handleCloseNavMenu}
                // className={classes.btnNavbar}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <a className={classes.link} href={page.link}>{page.name}</a>
              </MenuItem>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
