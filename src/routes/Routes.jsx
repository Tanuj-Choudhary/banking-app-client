import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '../components/home';
import Customers from '../components/customers';
import Customer from '../components/customer';
import SendMoney from '../components/sendmoney';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/customers" exact component={Customers} />
        <Route path="/customers/:id" exact component={Customer} />
        <Route path="/customers/:id/sendmoney" exact component={SendMoney} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
