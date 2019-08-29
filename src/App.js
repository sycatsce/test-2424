import React from 'react';
import './assets/style/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducer';
import PasswordForgotten from './features/Login/PasswordForgotten';
import Home from './features/Home/Home';

const store = createStore(
  reducers,
);


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/password-forgotten" component={PasswordForgotten} />
      </Router>
    </Provider>

  );
}

export default App;
