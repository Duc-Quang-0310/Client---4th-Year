import React from "react";
import { routesSecured } from "./common/config/routes/routes";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { route } from "./common/config/routes/routesName";

export const Application: React.FunctionComponent = () => {
  return (
    <div>
      <Router>
        <Switch>
          {routesSecured().map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
          <Redirect to={route.HOME} />
        </Switch>
      </Router>
    </div>
  );
};
