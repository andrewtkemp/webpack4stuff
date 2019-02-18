import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { App } from "./components";
import Testy from "./components/Testy";
import { Provider } from "react-redux";
import store from "./store";
export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
    <HashRouter>
      <div>
        <Switch>
          <Route exact={true} path="/" component={App} />
          <Route path="/testy" component={Testy} />
        </Switch>
      </div>
    </HashRouter>
    </Provider>
  );
}