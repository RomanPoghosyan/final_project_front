import React from "react";
import {FormControl, TextField, Button} from "@material-ui/core";
import HeaderText from "../../common/HeaderText/HeaderText";
import useStyles from "../../../utils/styles/useHeaderTextStyle";


const SignUp = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <HeaderText element={<h2>Sign Up</h2>}/>
            <FormControl className={classes.form}>
                <TextField fullWidth id="standard-basic" label="First Name" />
                <TextField fullWidth id="standard-basic" label="Last Name" />
                <TextField fullWidth id="standard-basic" label="Username" />
                <TextField fullWidth id="standard-basic" label="Email" />
                <TextField fullWidth id="standard-password-input" label="Password" />
                <Button variant={"contained"} color={"primary"}>Sign Up</Button>
            </FormControl>
        </div>
    );
};

export default SignUp;