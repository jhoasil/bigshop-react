import * as React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Container,
    Typography,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`,
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`,
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`,
    },
});

const navLinks = [
    { title: `clothes`, path: `/category/1` },
    { title: `electro`, path: `/category/2` },
];

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Container maxWidth="md" className={classes.navbarDisplayFlex}>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <Home fontSize="large" />
                        <Link
                            to="/"
                            color="primary"
                            className={classes.linkText}
                        >
                            <Typography variant="h6">BigShop</Typography>
                        </Link>
                    </IconButton>

                    <List
                        component="nav"
                        aria-labelledby="main navigation"
                        className={classes.navDisplayFlex}
                    >
                        {navLinks.map(({ title, path }) => (
                            <Link
                                to={path}
                                key={title}
                                className={classes.linkText}
                            >
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    <CartWidget />
                </Container>
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;
