import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import {Field} from "redux-form";
import {renderTextField} from "../../../../../common/FormControlls/FormControlls";
import {required} from "../../../../../../utils/validators/validators";
import FormLabel from "@material-ui/core/FormLabel";

const UserSelect = ({searchedUsers}) => {
    return (
        <>
            <FormLabel component="legend">Username</FormLabel>
            <Autocomplete
                id="combo-box-demo"
                options={searchedUsers}
                getOptionLabel={option => option.username}
                renderOption={option => (
                    <React.Fragment>
                        <span>{option.username}</span>
                        {option.first_name} ({option.id})
                    </React.Fragment>
                )}
                renderInput={params => (
                    <Field {...params} id="standard-basic" name={"username"}
                           component={renderTextField} margin="dense" variant="outlined" validate={[required]}/>
                )}
            />
        </>
    );
};

export default UserSelect;