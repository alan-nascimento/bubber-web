import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { SignIn, SignUp } from '~/pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
