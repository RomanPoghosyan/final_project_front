import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        typography: {
            color: '#fff',
        },
        primary: {
            main: "#89989d",
        },
        secondary: {
            main: "#886d64",
            dark: "#3f2727",
        },
        text: {
            color: '#fff',
        },
        textColor: '#fff',
        root: {
            textDecoration: 'none',
        },
        auth: {
            secondary: {
                main: "#3f3f4b",
                dark: "#3f51b5",
            },
            primary: {
                main: "#dedede"
            }
        },
    }
});
export default theme;
