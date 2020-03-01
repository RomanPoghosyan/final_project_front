import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/styles";
import {blue} from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import UserAvatar from "./UserAvatar/UserAvatar";
import AssignTaskForm from "./AssignTaskForm/AssignTaskForm";


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    assignorContainer: {
        // paddingTop: 20
        height: 100,
        alignItems: "center"
    },
    container: {
        "& > *": {
            paddingLeft: 0
        }
    }
});


const TaskAssignorAssignee = ({users, assignor, assignee}) => {
    const classes = useStyles();
    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={5} className={classes.container}>
                    <UserAvatar title={"Assignor"} classes={classes}>
                        <ListItemText primary={`${assignor.first_name} ${assignor.last_name}`}/>
                    </UserAvatar>
                </Grid>
                <Grid item xs={7}>
                    <UserAvatar title={"Assignee"} classes={classes}>
                        <ListItemText>
                            {assignee
                                ? `${assignee.first_name} ${assignee.last_name}`
                                : <AssignTaskForm onSubmit={onSubmit} users={users}/>
                            }
                        </ListItemText>
                    </UserAvatar>
                </Grid>
            </Grid>
        </div>
    );
};

export default TaskAssignorAssignee;


// {/*<ListItem button>*/}
// {/*    <ListItemText primary={"Assignor"}/>*/}
// {/*    <ListItemText primary={"Assignee"}/>*/}
// {/*</ListItem>*/}
// {/*<ListItem button>*/}
// {/*<ListItemAvatar>*/}
// {/*<UserAvatar className={classes.avatar}>*/}
// {/*    <PersonIcon/>*/}
// {/*    </UserAvatar>*/}
// {/*</ListItemAvatar>*/}
// {/*<ListItemText primary={`${assignor.first_name} ${assignor.last_name}`}/>*/}
// {/*<ListItemAvatar>*/}
// {/*<UserAvatar className={classes.avatar}>*/}
// {/*<PersonIcon/>*/}
// {/*</UserAvatar>*/}
// {/*</ListItemAvatar>*/}
// {/*<ListItemText>*/}
// {/*<Autocomplete*/}
// {/*id="combo-box-demo"*/}
// {/*options={options}*/}
// {/*getOptionLabel={option => option.title}*/}
// {/*// style={{width: "200px"}}*/}
// {/*renderInput={params => <TextField style={{width: "150px"}} {...params} label="Combo box" variant="outlined"/>}*/}
// {/*/>*/}
// {/*</ListItemText>*/}
// {/*</ListItem>*/}