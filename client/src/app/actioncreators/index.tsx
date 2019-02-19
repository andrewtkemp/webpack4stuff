import { UserLoginAction, UserSignUpAction, UserAuthActionPayload } from "../actions";

export const login =  (user:any): ReduxActions.Action<UserAuthActionPayload> => {
    const {username, password} = user;
    return UserLoginAction(username, password);
}

export const signup = (user:any): ReduxActions.Action<UserAuthActionPayload> => {
    const {username, password} = user;
    return UserSignUpAction(username, password);
}