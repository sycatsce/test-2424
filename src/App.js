import React from 'react';
import './assets/style/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducer';
import PasswordForgottenPage from './features/Home/pages/PasswordForgottenPage';
import DashboardPage from './features/Dashboard/pages/DashboardPage';
import HomePage from './features/Home/pages/HomePage';

const store = createStore(
  reducers,
);


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/password-forgotten" component={PasswordForgottenPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
      </Router>
    </Provider>

  );
}

export default App;
