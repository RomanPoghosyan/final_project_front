import React from "react";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";

export const renderTextField = ({input, meta: {touched, invalid, error}, ...custom}) => (
    <TextField
        fullWidth
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

export const radioButton = ({input, children, ...rest}) => (
    <RadioGroup {...input} {...rest}
                // valueSelected={input.value}
                onChange={(event, value) => input.onChange(value)}>
        {children}
    </RadioGroup>
);