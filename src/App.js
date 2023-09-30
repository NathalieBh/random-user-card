import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Users from './pages/Users';
import NewUsers from './pages/NewUsers';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/users/new" exact>
          <NewUsers />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
