import React from "react";
import PropTypes from "prop-types";
import {Field} from "redux-form";
import {renderCheckbox} from "../../../../common/FormControlls/FormControlls";

const MemoizedCheckboxes = React.memo(({privileges}) => {
    return privileges.map(p => (
        <span key={p.id}>
            <Field normalize={v => v ? p.id : 0} name={`${p.name}`} component={renderCheckbox}/>
        </span>
    ))
});

MemoizedCheckboxes.propTypes = {
    privileges: PropTypes.array,
};

export default MemoizedCheckboxes;