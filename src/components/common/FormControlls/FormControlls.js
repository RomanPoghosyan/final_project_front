import React from "react";
import TextField from "@material-ui/core/TextField";

export const renderTextField = ({ input, meta: { touched, invalid, error }, ...custom }) => (
    <TextField
        fullWidth
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)