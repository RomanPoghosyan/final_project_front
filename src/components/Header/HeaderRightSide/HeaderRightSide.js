import React from 'react';
import Notification from "./Notification/Notification";
import Account from "./Account/Account";

function HeaderRightSide() {
    return (
        <>
            <Notification/>
            <Account />
        </>
    );
}

export default HeaderRightSide;