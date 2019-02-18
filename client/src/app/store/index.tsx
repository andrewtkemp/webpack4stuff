import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers'

let initialState = {};
const w : any = window as any;
const devtools: any = w.devToolsExtension ? w.devToolsExtension() : (f:any)=>f;
let middleware = applyMiddleware(thunk);
const store: any = middleware(devtools(createStore))(rootReducer, initialState);

export default store;