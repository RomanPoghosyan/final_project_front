import React from "react";
import PropTypes from "prop-types";
import {Field} from "redux-form";
import {renderCheckbox} from "../../../../common/FormControlls/FormControlls";

const MemoizedCheckboxes = React.memo(({privileges}) => {
    return privileges.map(p => (
        <Field key={p.id} normalize={v => v ? p.id : 0} name={`${p.name}`} component={renderCheckbox}/>
    ))
});

MemoizedCheckboxes.propTypes = {
    privileges: PropTypes.array,
};

export default MemoizedCheckboxes;