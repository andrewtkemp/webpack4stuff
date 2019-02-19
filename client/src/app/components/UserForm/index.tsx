import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { compose } from "recompose";
import {login, signup} from "../../actioncreators";
export interface IUserFormProps {
    newUser?:boolean,
    login?:(user:{username:string, password:string})=> void;
    signup?:(user:{username:string, password:string})=> void;
}

export interface IUserFormState {
    error: {username:boolean, password:boolean},
    username: string;
    password: string;
}

export class UserForm extends React.Component<IUserFormProps, IUserFormState>{
    readonly state: IUserFormState = {
        error:{
            username:false,
            password:false
        },
        username: "",
        password: ""
    }
    handleChange = (event:React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = event.target;
        this.setState(prevState => ({
            ...prevState,
            [name]: value
          })) 
    }
    handleSubmit = (event:React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        const {username, password} = this.state
        this.props.login({username, password});
    }
    render() {
        return (
            <main>
            <Paper>
            <Avatar>
                 <LockOutlinedIcon />
                </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
                <form onSubmit={this.handleSubmit}>
                    <FormControl margin="normal" required fullWidth>
                        <TextField error={this.state.error.username} onChange={this.handleChange} label="Username" name="username" value={this.state.username} />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <TextField error={this.state.error.password} name="password" id="password" label="Password" onChange={this.handleChange} value={this.state.password} />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button type="submit" variant="contained" color="primary" > Sign In</Button>
                </form>
                </Paper>
            </main>
        )
    }
}
const mapStateToProps = (state:{auth:{username:string, password:string}}) =>{
    return {
        auth:state.auth
    }
}
export default connect(mapStateToProps, {login:login, signup:signup})(UserForm);