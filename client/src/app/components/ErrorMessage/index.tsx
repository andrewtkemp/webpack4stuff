import * as React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import * as s from './style.css';

type Props = {
    message:String
}

type State = {
    open:boolean
}


export default class ErrorMessage extends React.Component<Props, State>{
    readonly state: State = {
        open:true
    }
    closeError = () => {
        this.setState({
           open:!this.state.open 
        })
    }
    render(){
        const {closeIcon, iconVariant, textPosition, error} = s;
        const { closeError } = this;
        const { message } = this.props;
        const { open } = this.state;
        return(
            <div>
                <Snackbar open={open}>
                    <SnackbarContent className={error} message={<span className={textPosition}><ErrorIcon className={iconVariant}/>{message}</span>} action={[<IconButton key={"wah"} onClick={closeError}><CloseIcon className={closeIcon}/></IconButton>]}/>
                </Snackbar>
            </div>
        )
    }
}