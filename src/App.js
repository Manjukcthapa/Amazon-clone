import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <h1>HpmePage!!</h1>
        </Route>
      </Switch>
     
    </div>
    
  );
}

export default App;
