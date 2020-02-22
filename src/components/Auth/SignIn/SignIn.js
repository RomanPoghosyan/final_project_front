import React from "react";
import HeaderText from "../../common/HeaderText/HeaderText";
import useStyles from "../../../utils/styles/useHeaderTextStyle";
import {connect} from "react-redux";
import {login} from "../../../redux/user-reducer";
import PropTypes from "prop-types";
import SignInForm from "./SignInForm/SignInForm";


const SignIn = (props) => {
    const classes = useStyles();

    const onSubmit = (formData) => {
        props.login(formData.login, formData.password);
    };

    return (
        <div className={classes.container}>
            <HeaderText element={<h2>Sign In</h2>}/>
            <SignInForm onSubmit={onSubmit} className={classes.form}/>
        </div>
    );
};

SignIn.propTypes = {
    login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    isAuth: state.user.currentUser.isAuth
});

export default connect(mapStateToProps, {login})(SignIn);