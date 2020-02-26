import React from "react";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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

export const renderCheckbox = ({ input, label, ...rest }) => (
    <>
        <FormControlLabel
            control={
                <Checkbox
                    {...rest}
                    checked={input.value ? true : false}
                    onChange={input.onChange}
                />
            }
        />
    </>
)