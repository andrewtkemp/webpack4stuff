import * as React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles, createStyles } from "@material-ui/core";

export interface IErrorMessageProps {
    message:String,
    classes:{
        root:string;
        error:string;
        closeIcon:string;
        iconVariant:string;
    }
}

export interface IErrorMessageState {
    open:boolean
}
export const STYLES = createStyles({
    root: {
        display: "flex",
        alignItems: "center"
    },
    error:{
        backgroundColor: "#f44336"
    },
    iconVariant:{
        opacity: 0.9,
        marginRight: "8px",
        fontSize:"20px"
    },
    closeIcon:{
        color:"white"
    }
});


export class ErrorMessage extends React.Component<IErrorMessageProps, IErrorMessageState>{
    readonly state: IErrorMessageState = {
        open:true
    }
    closeError = () => {
        console.log("Closing Time", this.state)
        this.setState({
           open:!this.state.open 
        })
    }
    render(){
        const { closeError } = this;
        const { message } = this.props;
        const { open } = this.state;
        const {error, root, iconVariant, closeIcon} = this.props.classes;
        return(
            <div className={root}>
                <Snackbar open={open}>
                    <SnackbarContent className={error} message={<span className={root}><ErrorIcon className={iconVariant}/>{message}</span>} action={[<IconButton key={"wah"} onClick={closeError}><CloseIcon className={closeIcon}/></IconButton>]}/>
                </Snackbar>
            </div>
        )
    }
}
export default withStyles(STYLES, { withTheme: true })(ErrorMessage);