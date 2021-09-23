import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Badges from '../containers/Badges';
import BadgeNew from '../containers/BadgeNew';
import BadgeEdit from '../containers/BadgeEdit';
import Layout from '../components/Layout';

const App = (props) => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/web-badges/' component={Badges} />
          <Route exact path='/BadgeNew' component={BadgeNew} />
          <Route exact path='/BadgeEdit/:id' component={BadgeEdit} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
