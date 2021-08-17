import React, { Fragment } from 'react';
import Routes from './components/Routes/Routes';
import './App.css'
import { BrowserRouter as Router,Switch } from 'react-router-dom'
function App() {
  return (
    
    <Fragment>
      <Router>
      <Routes />
      </Router>
     
    </Fragment>
  );
}

export default App;
