import React from 'react';
import logo from '../../../assets/images/logoMediumWhite.png';

function Logo({img}) {
    return (
        <div>
            <img src={img ? img : logo} width={"100%"} height={'100%'} alt={"Company Logo"} title={"Go to home page"} />
        </div>
    )
}

export default Logo;