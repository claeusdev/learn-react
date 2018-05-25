import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const FourOhFour = () => <h1>You been lost</h1>;
const App = () => (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  </div>
);

render(<App />, document.getElementById('app'));
