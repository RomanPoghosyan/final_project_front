import {createSelector} from "reselect";
import customRolesTableCell from "../../components/Roles/TableCells/customRolesTableCell";
import initialRolesTableCell from "../../components/Roles/TableCells/initialRolesTableCell";

export const getPrivilegesSelect = state => state.home.role.privileges;

export const getMappedInitialPrivilegesSelect = createSelector(getPrivilegesSelect, (privileges) => {
   return [{id: 0, name: "Role"}, ...privileges].map(p => ({
       ...p, sortable: true,
       cell: initialRolesTableCell(p)
   }));
});

export const getMappedCustomPrivilegesSelect = createSelector(getPrivilegesSelect, (privileges) => {
   return [{id: 0, name: "Role"}, ...privileges].map(p => ({
       ...p, sortable: true,
       cell: customRolesTableCell(p)
   }));
});

export const getRolesSelect = state => state.home.role.roles;

export const getInitialRolesSelect = createSelector(getRolesSelect, (roles) => roles.filter(r => r.type === "INITIAL"));

export const getCustomRolesSelect = createSelector(getRolesSelect, (roles) => roles.filter(r => r.type === "CUSTOM"));
