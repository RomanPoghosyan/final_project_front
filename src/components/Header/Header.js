import React from "react";
import {makeStyles} from "@material-ui/styles";
import logo from '../../assets/images/workfront.png';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    header: {
        display: "grid",
        gridTemplateColumns: "minmax(80px, 1fr) minmax(200px, 1fr)",
        padding: '5px',
    },
    auth: {
        justifySelf: "end",
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        justifyItems: 'baseline',
    },
    logo: {
        height: '50px',
        width: '70px',
        backgroundSize: "100% 100%",
        objectFit: 'cover',
        backgroundImage: `url(${logo})`,
        cursor: "pointer"
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <div className={classes.logo} onClick={() => window.location.reload()}/>
            <div className={classes.auth}>
                <Link to={"/sign-in"}><Button color={'primary'} variant={"contained"}>Sign in</Button></Link>
              <Link to={'/sign-up'}><Button color={'primary'} variant={"contained"}>Sign up</Button></Link>
            </div>
        </header>
    );
};

export default Header;