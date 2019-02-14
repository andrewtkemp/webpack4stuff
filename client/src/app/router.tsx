import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { App } from "./components";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact={true} path="/" component={App} />
        </Switch>
      </div>
    </HashRouter>
  );
}