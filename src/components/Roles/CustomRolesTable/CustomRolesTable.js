import React from "react";
import {useSelector} from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import DataTable from "react-data-table-component";
import {getCustomRolesSelect, getMappedCustomPrivilegesSelect} from "../../../redux/Role/role-selectors";

const CustomRolesTable = () => {

    const privileges = useSelector(getMappedCustomPrivilegesSelect);

    const customRoles = useSelector(getCustomRolesSelect);

    const handleChange = (state) => {
    };


    return (
        <DataTable
            title="Custom Roles"
            columns={privileges}
            data={customRoles}
            selectableRows // add for checkbox selection
            selectableRowsComponent={Checkbox}
            onSelectedRowsChange={handleChange}
            // selectableRowsComponentProps={{ disabled: true }}
        />
    )
};

export default CustomRolesTable;