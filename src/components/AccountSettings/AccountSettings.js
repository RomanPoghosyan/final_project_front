import React from "react";
import TextField from "@material-ui/core/TextField";
import Header from "../Header/Header";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    // settings: {
    //     display:'grid',
    //     gridTemplateRows: '60px 1fr'
    // },
    form:{
        display:'grid',
        margin:'auto'
    }
}));

const AccountSettings = () => {
    const classes = useStyles();
    return (
        <div className={classes.settings}>
            <form className={classes.form}>
                <TextField disabled id="standard-disabled" label="Username" defaultValue="Hello World"/>
            </form>
        </div>
    )
};

export default AccountSettings;