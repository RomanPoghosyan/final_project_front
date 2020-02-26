import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import {createSelector} from "reselect";
import tableCell from "../../components/Roles/TableCell/TableCell";

export const getPrivilegesSelect = state => state.home.role.privileges;

export const getMappedInitialPrivilegesSelect = createSelector(getPrivilegesSelect, (privileges) => {
   return [{id: 0, name: "Role"}, ...privileges].map(p => ({
       ...p, sortable: true,
       cell: row => {
           return p.name === "Role" ?
               <div>{row.name}</div> :
               <div><Checkbox disabled checked={row.privilegesIds.includes(p.id)}/></div>
       },
   }));
});

export const getMappedCustomPrivilegesSelect = createSelector(getPrivilegesSelect, (privileges) => {
   return [{id: 0, name: "Role"}, ...privileges].map(p => ({
       ...p, sortable: true,
       cell: tableCell(p)
   }));
});

export const getRolesSelect = state => state.home.role.roles;

export const getInitialRolesSelect = createSelector(getRolesSelect, (roles) => roles.filter(r => r.type === "INITIAL"));

export const getCustomRolesSelect = createSelector(getRolesSelect, (roles) => roles.filter(r => r.type === "CUSTOM"));
