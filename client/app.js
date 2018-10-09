import React, {Fragment} from 'react';

import {Navbar} from './components';
import Routes from './routes';

const App = () => {
  return (
    <div id="content">
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
