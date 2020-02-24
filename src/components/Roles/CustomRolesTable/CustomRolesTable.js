import React from "react";
import {useSelector} from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import DataTable from "react-data-table-component";

const CustomRolesTable = () => {
    const privileges = useSelector(state => [{id: 0, name: "Role"}, ...state.home.role.privileges].map(p => ({
        ...p, sortable: true,
        cell: row => {
            return p.name === "Role" ?
                <div>{row.name}</div> :
                <div><Checkbox checked={row.privileges.includes(p.id)}/></div>
        },
    })));

    const initialRoles = useSelector(state => state.home.role.roles.filter(r => r.type === "CUSTOM"));

    const handleChange = (state) => {
        console.log('Selected Rows: ', state.selectedRows);
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

export default CustomRolesTable;