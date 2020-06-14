import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './components/header/header.component';
import MoonPhase from './components/moon-phase/moon-phase.component';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={MoonPhase}/>
      </Switch>
    </div>
  );
}

export default App;
