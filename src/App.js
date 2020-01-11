import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SignIn from "./pages/SignIn";

class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Switch>
              <Route path="/sign-in">
                <SignIn/>
              </Route>
              <Route path="/users">
                <h1>Users</h1>
              </Route>
              <Route path="/">
                <h1>Home</h1>
              </Route>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;