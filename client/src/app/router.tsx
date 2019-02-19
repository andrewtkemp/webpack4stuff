import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { App, UserForm } from "./components";
import { Provider } from "react-redux";
import store from "./store";
import Grid from '@material-ui/core/Grid';
export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
    <HashRouter>
     <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={16}>  
        <Switch>
          <Route path="/login" component={UserForm} />
          <Route path="/signup" component={UserForm} />
          <Route exact={true} path="/" component={App} />
        </Switch>
      </Grid>
    </HashRouter>
    </Provider>
  );
}