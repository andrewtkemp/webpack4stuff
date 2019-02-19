import { handleActions } from 'redux-actions';


const initialState = {
    username:"",
    password:""
}

const authReducer = handleActions({
    ["LOGIN_USER"]:(state, action)=>{
        return action.payload;
    }
}, initialState);


export default authReducer;