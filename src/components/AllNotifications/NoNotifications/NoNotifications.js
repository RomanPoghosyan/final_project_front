import React from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function NoNotifications() {
    return (
        <Box>
           <Typography component={"h3"} variant={"h2"}>
               Notifications
           </Typography>
            <Typography component={"h6"} variant={"h5"}>
                There are no notifications !
            </Typography>
        </Box>
    );
}

export default NoNotifications;