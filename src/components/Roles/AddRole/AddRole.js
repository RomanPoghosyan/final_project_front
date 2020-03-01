import React from "react";
import AddRoleForm from "./AddRoleForm/AddRoleForm";
import {useDispatch, useSelector} from "react-redux";
import {addRole} from "../../../redux/Role/actions";
import {getPrivilegesSelect} from "../../../redux/Role/role-selectors";


const AddRole = ({boardId}) => {
    const privileges = useSelector(getPrivilegesSelect);
    const dispatch = useDispatch();


    const onSubmit = (formData) => {
        dispatch(addRole(boardId,formData));
    };

    return <AddRoleForm privileges={privileges} onSubmit={onSubmit}/>
};

export default AddRole;