import React from 'react';
import Notification from "./Notification/Notification";
import Account from "./Account/Account";

function HeaderRightHand() {
    return (
        <div>
            <Notification/>
            <Account />
        </div>
    );
}

export default HeaderRightHand;