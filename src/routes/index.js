import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';
import { SignIn, SignUp, Dashboard } from '~/pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
