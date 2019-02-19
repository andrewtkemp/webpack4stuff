import { createAction } from "redux-actions";
import {LOGIN_USER, SIGNUP_USER, SIGNOUT_USER} from "./types";
export interface UserAuthActionPayload {
    username:string;
    password?:string;
    token?:string;
}
export const UserLoginAction = createAction<UserAuthActionPayload, string, string>(LOGIN_USER, (username, password) => ({username, password}));


export const UserSignUpAction = createAction<UserAuthActionPayload, string, string>(SIGNUP_USER, (response) => {
    console.log(response);
    return {username:"", password:""};
});