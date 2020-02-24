import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import {Field} from "redux-form";
import {renderTextField} from "../../../../../common/FormControlls/FormControlls";
import FormLabel from "@material-ui/core/FormLabel";
import {connect} from "react-redux";
import {requiredFieldCreator} from "../../../../../../utils/validators/validators";

const requiredUsername = requiredFieldCreator("Username");

const UserSelect = ({searchedUsers}) => {
    return (
        <>
            <FormLabel component="legend">Username</FormLabel>
            <Autocomplete
                id="grouped-demo"
                options={searchedUsers}
                getOptionLabel={option => option.username}
                renderOption={option => (
                    <React.Fragment>
                        <span>{option.username}</span>
                        {`${option.first_name} (${option.id})`}
                    </React.Fragment>
                )}
                renderInput={params => (
                    <Field {...params} id="standard-basic" name={"username"}
                           component={renderTextField} margin="dense" variant="outlined"
                           validate={[requiredUsername]}/>
                )}
            />
        </>
    );
};



const mapStateToProps = (state) => ({
    searchedUsers: state.user.searchedUsers,
});


export default connect(mapStateToProps, null)(UserSelect);