import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        typography: {
            color: '#fff',
        },
        primary: {
            main: "#00425a",
        },
        background: {
            main: "#fff"
        },
        secondary: {
            main: "#417281",
        },
        text: {
            color: '#fff',
        },
        popup: {
            main: "#bfdde8",
        },
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
