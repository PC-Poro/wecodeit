
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import NewProject from './containers/NewProject'
import Dashboard from './containers/Dashboard'
import Error from './containers/Error'
import './containers/global.module.css'


function App() {
  return (
    <Router>
      <Switch>

        <Route path="/new-project">
          <NewProject />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="/">
          <Home />
        </Route>

        <Route path="">
          <Error />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
