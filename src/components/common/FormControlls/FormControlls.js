import React from "react";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FormHelperText from "@material-ui/core/FormHelperText";

export const renderTextField = ({input, meta: {touched, invalid, error}, ...custom}) => (
    <TextField
        fullWidth
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

export const renderTextArea = ({input, meta: {touched, invalid, error, dirty}, ...custom}) => {
    return (
        <>
            <TextareaAutosize
                {...input}
                {...custom}
            />
            <FormHelperText error={Boolean(dirty && touched && invalid && error)}>{error}</FormHelperText>
        </>
    );
};

export const radioButton = ({input, children, ...rest}) => (
    <RadioGroup {...input} {...rest}
        // valueSelected={input.value}
                onChange={(event, value) => input.onChange(value)}>
        {children}
    </RadioGroup>
);

export const renderCheckbox = ({input, label, ...rest}) => (
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
);

export const renderSelectField = ({input, label, meta: {touched, error}, children, ...custom}) => (
    <FormControl error={touched && error} variant="outlined">
        <Select
            native
            {...input}
            {...custom}
            inputProps={{
                name: 'age',
                id: 'age-native-simple'
            }}
        >
            {children}
        </Select>
    </FormControl>
);

// {/*<FormControl variant="outlined" >*/}
// {/*    <Select*/}
// {/*        native*/}
// {/*        // value={state.age}*/}
// {/*        // onChange={handleChange('age')}*/}
// {/*        // labelWidth={labelWidth}*/}
// {/*        inputProps={{*/}
// {/*            name: 'age',*/}
// {/*            id: 'outlined-age-native-simple',*/}
// {/*        }}*/}
// {/*    >*/}
// {/*        <option value="" />*/}
// {/*        <option value={10}>Ten</option>*/}
// {/*        <option value={20}>Twenty</option>*/}
// {/*        <option value={30}>Thirty</option>*/}
// {/*    </Select>*/}
// {/*</FormControl>*/}