import { UserLoginAction, UserLoginActionPayload } from "../actions";

export const login =  (user:any): ReduxActions.Action<UserLoginActionPayload> => {
    const {username, password} = user;
    return UserLoginAction(username, password);
}