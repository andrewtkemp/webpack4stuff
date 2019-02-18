import { Action } from 'redux';

export const LOGIN_USER =  "LOGIN_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const SIGNOUT_USER = "SIGNOUT_USER";

export interface User {
    username: string,
    token:string
  }
  
export interface Login {
    username:string,
    password: string
}


export interface UserLoginAction {
  type: typeof LOGIN_USER,
  payload: Login
}

export type AuthTypes = UserLoginAction;