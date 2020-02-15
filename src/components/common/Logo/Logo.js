import React from 'react';
import logo from '../../../assets/images/logoMedium.png';
import {Link} from "react-router-dom";

function Logo() {
    return (
        <Link to={'/'}>
            <img src={logo} width={"100%"} height={'100%'} alt={"Company Logo"} title={"Go to home page"} />
        </Link>
    )
}

export default Logo;