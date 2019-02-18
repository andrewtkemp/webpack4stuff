import { handleActions } from 'redux-actions';


const initialState = {
    username:"",
    password:""
}

const authReducer = handleActions({
    ["USER_LOGIN"]:(state, action)=>{
        console.log("LOGGING IN", state, action);
        return action.payload;
    }
}, initialState);


export default authReducer;