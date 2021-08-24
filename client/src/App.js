import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, BrowserRouter as Router ,Route}
 from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component={Home}></Route>
        <Route exact path = "/signin" component={SignIn}></Route>
        <Route exact path = "/signup" component={SignUp}></Route>
      </Switch>
    </Router>
  )
}

export default App

 