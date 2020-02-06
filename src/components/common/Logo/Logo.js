import React from 'react';
import logo from '../../../assets/images/logoMedium.png';

function Logo() {
    return (
        <div>
            <img src={logo} width={"100%"} height={'100%'} alt={"Company Logo"} />
        </div>
    )
}

export default Logo;