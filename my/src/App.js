import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home'
import Signup from './pages/Signup'
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

function App() {

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

  return (
    <Router>
    <ThemeProvider theme={theme}>
    <div className="App">
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
