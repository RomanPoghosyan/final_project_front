import React from "react";
import {useSelector} from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import DataTable from "react-data-table-component";
import {getCustomRolesSelect, getMappedCustomPrivilegesSelect} from "../../../redux/Role/selectors";

const CustomRolesTable = () => {

    const privileges = useSelector(getMappedCustomPrivilegesSelect);

    const initialRoles = useSelector(getCustomRolesSelect);

    const handleChange = (state) => {
        console.log('Selected Rows: ', state.selectedRows);
    };


    return (
        <DataTable
            title="Custom Roles"
            columns={privileges}
            data={initialRoles}
            selectableRows // add for checkbox selection
            selectableRowsComponent={Checkbox}
            onSelectedRowsChange={handleChange}
            // selectableRowsComponentProps={{ disabled: true }}
        />
    )
};

export default CustomRolesTable;