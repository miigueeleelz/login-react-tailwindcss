import React from 'react';

import { Router } from '@reach/router';

import LoginView from './views/LoginView';

const App = () => (
  <Router>
    <LoginView path="/login" />
  </Router>
);

export default App;
