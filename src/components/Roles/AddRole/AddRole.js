import React from "react";
import AddRoleForm from "./AddRoleForm/AddRoleForm";
import {useDispatch, useSelector} from "react-redux";
import {addRole} from "../../../redux/Role/actions";


const AddRole = () => {
    const privileges = useSelector(state => state.home.role.privileges);
    const dispatch = useDispatch();


    const onSubmit = (formData) => {
        dispatch(addRole(formData));
    };

    return <AddRoleForm privileges={privileges} onSubmit={onSubmit}/>
};

export default AddRole;