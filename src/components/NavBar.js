import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import {Link} from "react-router-dom";
import DateComponent from "./DateComponent"
import CartWidget from "./CartWidget";

const StyledLinks = {
    color: "#03718a", 
    textDecoration:"none"
}

export default function NavBar(){

    const celulares = "MLA1051";
    const computacion = "MLA1648";
    const consolas = "MLA1144";
    const relojes = "MLA1010";

    return (

    <AppBar position="static" style={{flexGrow:1, backgroundColor: "#3cd8fa"}}>
        <Toolbar> 
            <Typography variant="h6" style={{flexGrow:1}}>
                <Button>
                    <Link style={StyledLinks} to={`/`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="60" width="100" viewBox="-22.5012 -33.95 195.0104 203.7"><path d="M39.4 107.8h1.4v28h-5.3v-24.6c0-.8 1.7-3.4 3.9-3.4zm29 6.2c-2.6 0-4.6 1.1-6 3.3v-9.5h-.6c-2.6 0-4 1.4-4.7 2.6v-.2 16.1c0 6.3 3.3 9.5 9.9 9.5 6.6-.1 9.8-3.7 9.8-10.7 0-7.3-2.8-10.9-8.4-11.1zm-1.6 17.2c-3 0-4.5-2.2-4.4-6.4.2-4.1 1.6-6.1 4.5-6.1s4.3 2 4.5 6.1c0 4.3-1.6 6.4-4.6 6.4zm13.1-6.4c.2-6.8 3.5-10.6 10.6-10.6h1.6v5.5h-2.5c-3 0-4.3 1.9-4.3 5v11h-5.4zm20.6 5.5c.9.8 2.1 1.2 3.7 1.2 1.1 0 2.1-.3 2.9-.9.8-.6 1.3-1.2 1.5-1.8h5c-.8 2.5-2 4.2-3.7 5.3-1.7 1.1-3.6 1.6-6 1.6-1.6 0-3.1-.3-4.4-.8-1.3-.5-2.4-1.3-3.3-2.2-.9-1-1.6-2.1-2.1-3.4-.5-1.3-.7-2.8-.7-4.4 0-1.5.3-3 .8-4.3.5-1.3 1.2-2.5 2.1-3.4.9-1 2-1.7 3.3-2.3 1.3-.6 2.7-.8 4.3-.8 1.7 0 3.3.3 4.6 1 1.3.7 2.4 1.6 3.2 2.7.8 1.1 1.4 2.4 1.8 3.9.4 1.4.5 3 .4 4.6H99c.2 1.9.7 3.2 1.5 4zm6.4-10.8c-.7-.7-1.7-1.1-3.1-1.1-.9 0-1.7.2-2.3.5-.6.3-1.1.7-1.4 1.1-.4.5-.6.9-.8 1.4-.2.5-.2 1-.3 1.4h9.2c-.1-1.5-.6-2.6-1.3-3.3zm-60.4-11.7h5.3v4.8h-5.3zm0 7.2h5.3v20.7h-5.3zm96.7-18.3c-.9 1-2.1 1.6-3.6 1.6s-2.7-.6-3.6-1.6c-.9-1-1.2-2.7-1.2-4.7 0-2.1.4-3.6 1.2-4.6.9-1 2.1-1.6 3.6-1.6s2.7.6 3.6 1.6c.9 1 1.2 2.7 1.2 4.6 0 1.9-.3 3.5-1.2 4.7zm4.2-12.4c-1.6-2.1-4.3-3.3-7.8-3.3-3.4 0-6.2 1-7.8 3.3-1.6 2.1-2.6 4.7-2.6 7.6 0 3 .9 5.6 2.6 7.6 1.6 2.1 4.3 3.2 7.8 3.2 3.4 0 6.2-1 7.8-3.2 1.6-2.1 2.6-4.7 2.6-7.6.1-2.8-.8-5.4-2.6-7.6m-26 12.4c-.7 1-1.9 1.6-3.4 1.6s-2.7-.6-3.3-1.6c-.7-1.2-1-2.7-1-4.7 0-1.8.3-3.2 1-4.3.7-1.2 1.8-1.8 3.4-1.8 1 0 1.9.3 2.7.9 1.2 1 1.9 3 1.9 5.6-.3 1.8-.5 3.3-1.3 4.3zm6.2-21.8s-5.4-.6-5.4 3.7v5.7c-.6-.9-1.3-1.6-2.4-2.3-.9-.6-2.1-.7-3.3-.7-2.7 0-4.8 1-6.5 3-1.6 1.9-2.4 4.8-2.4 8.4 0 3 .7 5.6 2.4 7.3 1.6 1.9 4.8 2.7 7.6 2.7 9.9 0 9.7-8.4 9.7-8.4l.3-19.4M101 94.2c0 1.8-.6 3-1.5 3.7-1 .6-2.1 1-3.2 1-.7 0-1.3-.1-1.8-.6s-.7-1-.7-1.9c0-1 .4-1.8 1.2-2.3.4-.3 1.3-.6 2.4-.7l1.2-.3c.6-.1 1-.3 1.5-.3.3-.1.7-.3 1-.4zm2.7-11.7c-1.8-.9-3.7-1.3-6-1.3-3.4 0-5.9.9-7.3 2.7-.9 1.2-1.3 2.6-1.5 4.3H94c.1-.7.4-1.3.7-1.8.6-.6 1.5-.9 2.7-.9 1.2 0 1.9.1 2.6.4.6.3.9.9.9 1.8 0 .7-.4 1.2-1.2 1.5-.4.1-1.2.3-2.1.4l-1.8.1c-2.1.3-3.6.7-4.7 1.3-1.9 1-2.9 3-2.9 5.4 0 1.9.6 3.4 1.8 4.5 1.2 1 2.7 1.5 4.6 1.6 11.7.4 11.6-6.2 11.6-7.5v-7.6c.1-2.2-.7-4-2.5-4.9m-26.5 3.3c1.3 0 2.3.4 3 1.2.4.6.7 1.3.7 2.1h5.7c-.3-2.9-1.3-5-3-6-1.6-1.2-3.9-1.6-6.6-1.6-3.2 0-5.7.9-7.5 2.9-1.8 2-2.7 4.7-2.7 8.1 0 3.2.7 5.6 2.4 7.5 1.6 1.9 4.2 2.9 7.6 2.9 3.4 0 6-1.2 7.8-3.4 1-1.5 1.6-3 1.8-4.7h-5.7c-.1 1-.4 1.9-1 2.6-.6.6-1.5 1-2.9 1-1.8 0-3.2-.9-3.7-2.6-.3-.9-.6-2.1-.6-3.6s.1-2.9.6-3.7c.9-1.8 2.1-2.7 4.1-2.7m-11.9-4.5c-11.9 0-11.1 10.5-11.1 10.5v10.6h5.4v-9.9c0-1.6.1-2.9.6-3.6.7-1.3 2.1-2.1 4.3-2.1h.6c.3 0 .6 0 .9.1v-5.4h-.4c-.1-.2-.1-.2-.3-.2m-26.8 5.5c.7-.7 1.8-1.2 3.2-1.2 1.2 0 2.3.3 3.2 1 .9.7 1.3 1.8 1.3 3.2H37c.3-1.2.7-2.2 1.5-3zm7.2 9.9c-.1.3-.4.6-.7.7-.7.6-1.8.7-3 .7s-2.1-.1-2.9-.7c-1.3-.7-2.1-2.3-2.1-4.2h14.8c0-1.8 0-3.2-.1-4-.3-1.6-.7-3-1.6-4.2-.9-1.3-2.1-2.4-3.4-3-1.3-.6-3-.9-4.8-.9-3 0-5.4.9-7.2 2.9-1.8 1.9-2.9 4.6-2.9 8.1 0 3.7 1 6.5 3.2 8.1 2.1 1.6 4.5 2.6 7.2 2.6 3.3 0 5.9-1 7.6-3 1-1 1.6-2.1 1.8-3.2l-5.9.1m-16.2 5.6h-5V90c0-1.2-.3-3.7-3.6-3.7-2.1 0-3.7 1.5-3.7 3.7v12.3h-5V90c0-1.2-.3-3.7-3.6-3.7C6.5 86.3 5 87.8 5 90v12.3H0V90.1c0-5.1 3.3-9 8.5-9 2.6 0 4.7 1 6.2 2.9 1.5-1.8 3.6-2.9 6.2-2.9 5.4 0 8.5 3.7 8.5 9l.1 12.2m93.3-71.2C122.8 14 101.5 0 75.2 0S27.6 14 27.6 31.1v1.8c0 18.2 18.6 32.9 47.6 32.9 29.1 0 47.6-14.7 47.6-32.9v-1.8z" fill="#2D3277"/><path d="M121.1 31.1c0 16.1-20.5 29.2-45.7 29.2-25.2 0-45.7-13.1-45.7-29.2S50.2 1.9 75.4 1.9c25.2 0 45.7 13.1 45.7 29.2z" fill="#FFE600"/><g fill="#FFF"><path d="M60.2 21.9s-.5.5-.2.9c.7.9 2.9 1.4 5.2.9 1.3-.3 3.1-1.7 4.7-3 1.8-1.4 3.6-2.9 5.4-3.4 1.9-.6 3.1-.3 3.9-.1.9.3 1.9.9 3.6 2.1 3.1 2.3 15.7 13.3 17.9 15.2 1.7-.8 9.5-4.1 20.1-6.5-.9-5.6-4.3-10.8-9.5-15-7.2 3-16.1 4.6-24.8.4 0 0-4.7-2.2-9.4-2.1-6.9.2-9.8 3.1-13 6.3z"/><path d="M100.2 35.7c-.1-.1-14.8-12.9-18.1-15.4-1.9-1.4-3-1.8-4.1-2-.6-.1-1.4 0-2 .2-1.5.4-3.6 1.8-5.4 3.2-1.9 1.5-3.6 2.9-5.2 3.2-2.1.5-4.6-.1-5.7-.9-.5-.3-.8-.7-1-1.1-.4-1 .4-1.8.5-1.9l4-4.4 1.4-1.4c-1.3.2-2.5.5-3.7.8-1.5.4-2.9.8-4.3.8-.6 0-3.8-.5-4.4-.7-3.7-1-6.9-2-11.7-4.2-5.7 4.3-9.6 9.6-10.7 15.5.8.2 2.2.6 2.7.7 13 2.9 17 5.9 17.8 6.5.8-.9 1.9-1.4 3.2-1.4 1.4 0 2.7.7 3.5 1.8.7-.6 1.8-1.1 3.1-1.1.6 0 1.2.1 1.9.3 1.5.5 2.2 1.5 2.6 2.4.5-.2 1.1-.4 1.8-.4s1.4.2 2.2.5c2.4 1 2.8 3.4 2.6 5.2h.5c2.9 0 5.2 2.3 5.2 5.2 0 .9-.2 1.7-.6 2.4.8.4 2.7 1.4 4.5 1.2 1.4-.2 1.9-.6 2.1-.9.1-.2.3-.4.1-.6l-3.7-4.1s-.6-.6-.4-.8c.2-.2.6.1.9.3 1.9 1.6 4.1 3.9 4.1 3.9s.2.3 1 .5c.7.1 2 0 2.9-.7.2-.2.5-.4.6-.6.9-1.2-.1-2.4-.1-2.4L84 40.5s-.6-.6-.4-.8c.2-.2.6.1.9.3 1.4 1.1 3.3 3.1 5.1 4.9.4.3 2 1.3 4.1-.1 1.3-.9 1.6-1.9 1.5-2.7-.1-1-.9-1.8-.9-1.8l-5.8-5.9s-.6-.5-.4-.8c.2-.2.6.1.9.3 1.9 1.6 6.9 6.2 6.9 6.2.1 0 1.8 1.3 4-.1.8-.5 1.3-1.2 1.3-2.1.1-1.3-1-2.2-1-2.2z"/><path d="M71.9 43.2c-.9 0-1.9.5-2 .5-.1 0 0-.4.1-.6.1-.2 1.3-3.8-1.6-5.1-2.2-1-3.6.1-4 .6-.1.1-.2.1-.2 0 0-.6-.3-2.4-2.3-3-2.8-.9-4.5 1.1-5 1.8-.2-1.6-1.5-2.8-3.2-2.8-1.8 0-3.2 1.4-3.2 3.2 0 1.8 1.4 3.2 3.2 3.2.9 0 1.6-.3 2.2-.9v.1c-.1.8-.4 3.7 2.6 4.8 1.2.5 2.2.1 3.1-.5.3-.2.3-.1.3.1-.1.7 0 2.3 2.3 3.2 1.7.7 2.7 0 3.3-.6.3-.3.4-.2.4.2.1 2.1 1.9 3.8 4 3.8 2.2 0 4-1.8 4-4s-1.8-4-4-4z"/></g><path d="M100.8 34.2c-4.5-3.9-14.9-13-17.8-15.1-1.6-1.2-2.7-1.9-3.7-2.1-.4-.1-1-.3-1.8-.3-.7 0-1.5.1-2.3.4-1.8.6-3.6 2-5.4 3.4l-.1.1c-1.6 1.3-3.3 2.6-4.6 2.9-.6.1-1.1.2-1.7.2-1.4 0-2.7-.4-3.2-1-.1-.1 0-.3.2-.5l4-4.3c3.1-3.1 6-6 12.8-6.2h.3c4.2 0 8.4 1.9 8.9 2.1 4 1.9 8 2.9 12.1 2.9 4.3 0 8.7-1.1 13.3-3.2-.5-.4-1.1-.9-1.6-1.3-4.1 1.8-7.9 2.6-11.7 2.6-3.8 0-7.6-.9-11.3-2.7-.2-.1-4.8-2.3-9.7-2.3h-.4c-5.7.1-8.9 2.1-11 3.9-2.1 0-3.9.6-5.5 1-1.4.4-2.7.7-3.9.7h-1.5c-1.4 0-8.4-1.7-13.9-3.9-.6.4-1.1.8-1.7 1.2 5.8 2.4 12.9 4.2 15.1 4.4.6 0 1.3.1 2 .1 1.5 0 2.9-.4 4.4-.8.9-.2 1.8-.5 2.7-.7l-.8.8-4 4.4c-.3.3-1 1.2-.6 2.2.2.4.6.8 1.1 1.2 1 .6 2.7 1.1 4.3 1.1.6 0 1.2-.1 1.7-.2 1.7-.4 3.5-1.8 5.3-3.3 1.5-1.2 3.6-2.7 5.2-3.2.5-.1 1-.2 1.5-.2h.4c1.1.1 2.1.5 4 1.9 3.3 2.5 18 15.3 18.1 15.4 0 0 .9.8.9 2.2 0 .7-.5 1.4-1.2 1.9-.6.4-1.3.6-1.9.6-1 0-1.7-.5-1.7-.5s-5.1-4.6-6.9-6.2c-.3-.3-.6-.5-.9-.5-.2 0-.3.1-.4.2-.3.4 0 .9.4 1.2l5.9 5.9s.7.7.8 1.6c0 1-.4 1.8-1.4 2.4-.7.5-1.4.7-2.1.7-.9 0-1.5-.4-1.7-.5l-.9-.8c-1.5-1.5-3.1-3.1-4.3-4-.3-.2-.6-.5-.9-.5-.1 0-.3 0-.4.2-.1.1-.2.4.1.9.1.2.3.3.3.3l4.3 4.8s.9 1.1.1 2l-.2.2-.4.4c-.7.6-1.7.7-2.1.7h-.6c-.4-.1-.7-.2-.9-.4-.2-.3-2.4-2.4-4.2-3.9-.2-.2-.5-.4-.8-.4-.1 0-.3.1-.4.2-.3.4.2 1 .4 1.2l3.7 4s0 .1-.1.3c-.1.2-.6.6-1.9.8h-.5c-1.4 0-2.8-.7-3.6-1.1.3-.7.5-1.5.5-2.3 0-3-2.4-5.4-5.4-5.4h-.2c.1-1.4-.1-4-2.8-5.1-.8-.3-1.5-.5-2.3-.5-.6 0-1.1.1-1.7.3-.6-1.1-1.5-1.9-2.7-2.3-.7-.2-1.3-.3-2-.3-1.1 0-2.1.3-3 1a4.6 4.6 0 00-3.6-1.7c-1.2 0-2.4.5-3.2 1.3-1.1-.9-5.6-3.7-17.7-6.5-.6-.1-1.9-.5-2.7-.8-.1.6-.2 1.3-.3 2 0 0 2.2.5 2.7.6 12.3 2.7 16.4 5.6 17.1 6.1-.2.6-.3 1.2-.3 1.8 0 2.6 2.1 4.6 4.6 4.6.3 0 .6 0 .9-.1.4 1.9 1.6 3.3 3.5 4 .6.2 1.1.3 1.6.3.3 0 .7 0 1.1-.1.3.9 1.1 2 2.9 2.7.6.3 1.2.4 1.8.4.5 0 1-.1 1.4-.3.8 2 2.8 3.4 5 3.4 1.5 0 2.9-.6 3.9-1.7.9.5 2.7 1.4 4.6 1.4h.7c1.9-.2 2.7-1 3.1-1.5.1-.1.1-.2.2-.3.4.1.9.2 1.5.2 1 0 2-.3 3-1.1 1-.7 1.7-1.7 1.7-2.6.3.1.7.1 1 .1 1 0 2.1-.3 3.1-1 1.9-1.2 2.2-2.9 2.2-3.9.3.1.7.1 1 .1 1 0 2-.3 2.9-.9 1.2-.8 1.9-1.9 2-3.2.1-.9-.2-1.8-.6-2.6 3.2-1.4 10.4-4 19-6 0-.7-.1-1.3-.3-2-10.3 2.2-18 5.5-19.9 6.4zM71.9 50.9c-2 0-3.6-1.6-3.7-3.6 0-.2 0-.6-.4-.6-.2 0-.3.1-.5.2-.4.4-1 .8-1.8.8-.4 0-.8-.1-1.2-.3-2.1-.9-2.2-2.3-2.1-2.9 0-.2 0-.3-.1-.4L62 44h-.1c-.1 0-.2 0-.4.2-.6.4-1.2.6-1.8.6-.3 0-.7-.1-1-.2-2.8-1.1-2.6-3.7-2.4-4.5 0-.2 0-.3-.1-.4l-.2-.2-.2.2c-.6.5-1.3.8-2 .8-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9 1.4 0 2.7 1.1 2.9 2.5l.1.8.4-.7c0-.1 1.2-1.9 3.4-1.8.4 0 .8.1 1.3.2 1.7.5 2 2.1 2 2.7 0 .4.3.4.3.4.1 0 .3-.1.3-.2.3-.3 1-.9 2.1-.9.5 0 1 .1 1.6.4 2.7 1.2 1.5 4.6 1.5 4.7-.2.6-.3.8 0 1h.2c.1 0 .3 0 .5-.1.4-.1.9-.3 1.4-.3 2 0 3.7 1.7 3.7 3.7.1 2.2-1.6 3.8-3.6 3.8z" fill="#2D3277"/></svg>
                    </Link>
                </Button>
            </Typography>
            <Typography variant="h6"  >
                <Button>
                    <Link style={StyledLinks} to={`/category/${consolas}`}>Consolas</Link>
                </Button>
            </Typography>
            <Typography variant="h6" >
                <Button>
                    <Link style={StyledLinks} to={`/category/${celulares}`}>Celulares</Link>
                </Button>
            </Typography>
            <Typography variant="h6"  >
                <Button>
                    <Link style={StyledLinks} to={`/category/${computacion}`}>Computación</Link>
                </Button>
            </Typography>
            <Typography variant="h6"  >
                <Button>
                    <Link style={StyledLinks} to={`/category/${relojes}`}>Relojes</Link>
                </Button>
            </Typography>
            <Typography variant="subtitle1" style={{paddingTop: 12, marginLeft: 15}} >
                <DateComponent/>
            </Typography>
            <Button color="inherit">
                <Link to={`/cart`}>
                    <CartWidget/>
                </Link>
            </Button>
        </Toolbar>
      </AppBar>
        
     );
}
