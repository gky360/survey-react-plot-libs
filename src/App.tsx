import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { ReactChartjs2 } from './ReactChartjs2';
import { Recharts } from './Recharts';

const ROUTES = {
  HOME: '/',
  RECHARTS: '/recharts',
  REACT_CHARTJS_2: '/react-chartjs-2',
};

function App() {
  return (
    <Router>
      <CssBaseline />
      <div>
        <nav>
          <ul>
            <li>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.RECHARTS}>recharts</Link>
            </li>
            <li>
              <Link to={ROUTES.REACT_CHARTJS_2}>react-chartjs-2</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path={ROUTES.RECHARTS}>
            <Recharts />
          </Route>
          <Route path={ROUTES.REACT_CHARTJS_2}>
            <ReactChartjs2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
