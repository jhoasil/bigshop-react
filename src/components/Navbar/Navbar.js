import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
  Typography
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import CartWidget from "../CartWidget/CartWidget";


const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

const navLinks = [
  { title: `product`, path: `/product` },
  { title: `contact`, path: `/contact` },
  { title: `faq`, path: `/faq` }
];

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
            <Typography variant="h6" >
                BigShop
            </Typography>
          </IconButton>       
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
          <CartWidget/>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
