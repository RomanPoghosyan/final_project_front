import React from "react";
import {useSelector} from "react-redux";
import DataTable from "react-data-table-component";
import Checkbox from "@material-ui/core/Checkbox";
import {getInitialRolesSelect, getMappedInitialPrivilegesSelect,} from "../../../redux/Role/selectors";


const InitialRolesTable = () => {

    const privileges = useSelector(getMappedInitialPrivilegesSelect);

    const initialRoles = useSelector(getInitialRolesSelect);

    const handleChange = (state) => {
        // console.log('Selected Rows: ', state.selectedRows);
    };

    return (
        <DataTable
            title="Initial Roles"
            columns={privileges}
            data={initialRoles}
            selectableRows // add for checkbox selection
            selectableRowsComponent={Checkbox}
            onSelectedRowsChange={handleChange}
            // selectableRowsComponentProps={{ disabled: true }}
        />
    )
};

export default InitialRolesTable;