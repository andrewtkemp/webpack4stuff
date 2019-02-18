import { createAction } from "redux-actions";

export interface UserLoginActionPayload {
    username:string;
    password:string;
}

export const UserLoginAction = createAction<UserLoginActionPayload, string, string>("USER_LOGIN", (username, password) => ({username, password}));