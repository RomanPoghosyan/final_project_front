import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    accountIcon: props => ({
        width: props.width ? props.width : 40,
        height: props.height ? props.height : "",
        minWidth: '0px',
        padding: props.padding ? props.padding : "5px 0",
        fontWeight: "bold",
        borderRadius: props.borderRadius ? props.borderRadius : "",
        // backgroundColor,
    }),
}));

const AccountIcon = ({firstName, lastName, backgroundColor, height, width, padding, borderRadius, onClick}) => {
    const classes = useStyles({height, width, borderRadius, padding});

    return (
        <Button
            className={classes.accountIcon}
            variant="contained"
            color={backgroundColor}
            onClick={onClick ? onClick : null}
            aria-label="add">{`${firstName[0]} ${lastName[0]}`}</Button>
    );
};

export default AccountIcon;