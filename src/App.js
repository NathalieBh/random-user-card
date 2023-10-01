import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MainNavigation from './components/Navigation/MainNavigation';
import Users from './pages/Users';
import AddUsers from './pages/AddUsers';
import UserCard from './pages/UserCard';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/user" exact>
            <UserCard />
          </Route>
          <Route path="/users/add" exact>
            <AddUsers />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
