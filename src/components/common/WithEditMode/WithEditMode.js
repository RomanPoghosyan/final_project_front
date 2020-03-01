import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

const WithEditMode = (props) => {
    let [editMode, setEditMode] = useState(!props.value);
    let [value, setValue] = useState(props.value);
    const dispatch = useDispatch();

    useEffect( () => {
        setValue(props.value);
    }, [props.value] );

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        dispatch(props.thunkCreator(value));
    };

    const onValueChange = (e) => {
        setValue(e.currentTarget.value);
    };

    return (
        <div>
            {
                props.children(value, editMode, activateEditMode, deactivateEditMode, onValueChange)
            }
        </div>
    )
};

export default WithEditMode;
