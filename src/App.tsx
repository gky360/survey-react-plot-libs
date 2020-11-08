import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Recharts } from './Recharts';

const ROUTES = {
  RECHARTS: '/recharts',
};

function App() {
  return (
    <Router>
      <CssBaseline />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={ROUTES.RECHARTS}>recharts</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path={ROUTES.RECHARTS}>
            <Recharts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
