import * as React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles, createStyles } from "@material-ui/core";

export interface IUserFormProps {
    classes: {
        root: string;
    }
}

export interface IUserFormState {
    username: string;
    password: string;
}
export const STYLES = createStyles({
    root: {
        display: "flex",
        alignItems: "center"
    }
});


export class UserForm extends React.Component<IUserFormProps, IUserFormState>{
    readonly state: IUserFormState = {
        username: "",
        password: ""
    }
    handleChange = (event:React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = event.target;
        this.setState(prevState => ({
            ...prevState,
            [name]: value,
          }))
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.handleChange} name="username" value={this.state.username}/>
                    <input type="password"  onChange={this.handleChange}  name="password" value={this.state.password} />
                </form>>
            </div>
        )
    }
}
export default withStyles(STYLES, { withTheme: true })(UserForm);