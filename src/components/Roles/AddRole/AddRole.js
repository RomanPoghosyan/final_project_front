import React from "react";
import AddRoleForm from "./AddRoleForm/AddRoleForm";
import {useDispatch, useSelector} from "react-redux";
import {addRole} from "../../../redux/role-reducer";


const AddRole = () => {
    const privileges = useSelector(state => state.home.role.privileges);
    const dispatch = useDispatch();


    const onSubmit = (formData) => {
        console.log("Roles",formData)
        console.log("Roles length",Object.keys(formData).length)
        dispatch(addRole(formData));
    };

    return <AddRoleForm privileges={privileges} onSubmit={onSubmit}/>
};

export default AddRole;