import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";

export const renderTextField = ({ input, meta: { touched, invalid, error }, ...custom }) => (
    <TextField
        fullWidth
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

export const radioButton = ({ input, ...rest }) => (
    <FormControl>
        <RadioGroup {...input} {...rest}>
        </RadioGroup>
    </FormControl>
)