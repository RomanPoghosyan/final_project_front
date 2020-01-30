import React from "react";
import TextField from "@material-ui/core/TextField";
import HeaderText from "../../common/HeaderText/HeaderText";
import useStyles from "../../../utils/styles/useHeaderTextStyle";
import {Button} from "@material-ui/core";


const SignIn = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <HeaderText element={<h2>Sign In</h2>}/>
            <form className={classes.form}>
                <TextField fullWidth id="standard-basic" label="Login" />
                <TextField fullWidth id="standard-password" label="Password" />
                <Button variant={"contained"} color={"primary"}>Sign In</Button>
            </form>
        </div>
    );
};

export default SignIn;

