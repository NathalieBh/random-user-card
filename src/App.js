import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainNavigation from './components/Navigation/MainNavigation';
import Users from './pages/Users';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
