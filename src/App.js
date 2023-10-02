import React, { Fragment } from 'react';

import Users from './components/Users';
import MainHeader from './components/Navigation/MainHeader';

const App = () => {
  return (
    <Fragment>
      <MainHeader />
      <Users />
    </Fragment>
  );
};
export default App;
