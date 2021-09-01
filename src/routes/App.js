import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Badges from '../containers/Badges';
import BadgeNew from '../containers/BadgeNew';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Badges} />
        <Route exact path='/BadgeNew' component={BadgeNew} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
