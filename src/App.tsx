import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/create';
import Present from './pages/present';
import {HomeRoute, CreateRoute, PresentRoute} from './components/constants';

function App(props: {}) {
  return(
    <Router>
      <Switch>
        <Route path={CreateRoute}>
          <Create />
        </Route>
        <Route path={PresentRoute}>
          <Present />
        </Route>
        <Route path={HomeRoute}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
