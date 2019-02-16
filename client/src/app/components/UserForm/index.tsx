import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles, createStyles } from "@material-ui/core";

export interface IUserFormProps {
    classes: {
        root: string;
        form:string;
        paper:string;
        avatar:string;
    }
}

export interface IUserFormState {
    username: string;
    password: string;
}
export const STYLES = createStyles({
    root: {
        display: "flex",
        alignItems: "center",
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    form: {
        width: '100%'   
    },
    avatar:{
        margin:"8px",
        backgroundColor:'teal'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding:"16px 24px 24px"
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
        const { classes } = this.props;
        return (
            <main className={classes.root}>
            <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
                 <LockOutlinedIcon />
                </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input type="text" onChange={this.handleChange} name="username" value={this.state.username} autoFocus autoComplete="username" />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name="password" type="password" id="password" onChange={this.handleChange} value={this.state.password} autoComplete="current-password" />
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
export default withStyles(STYLES, { withTheme: true })(UserForm);