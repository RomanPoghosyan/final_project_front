import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        typography: {
            color: '#fff',
        },
        primary: {
            main: "#dedede",
        },
        secondary: {
            main: "#3f3f4b",
            dark: "#3f51b5",
        },
        text: {
            color: '#fff',
        },
        textColor: '#fff',
        root: {
            textDecoration: 'none',
        },
    }
});
export default theme;