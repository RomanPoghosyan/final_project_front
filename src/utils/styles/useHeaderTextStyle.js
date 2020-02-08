import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    container: {
        display: "grid",
        justifyItems: "center",
        justifyContent: "center",
        alignContent: "center",
        gridTemplateRows: "2fr 3fr",
        gridAutoColumns: "70%",
        '& > div, form': {
            width: '100%',
            minWidth: "200px",
            maxWidth: "600px"
        }
    },
    form: {
        display: "grid",
        alignContent: "start",
        gridRowGap: "7px",
    },
});

export default useStyles;