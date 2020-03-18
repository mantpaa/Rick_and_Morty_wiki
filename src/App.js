import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import CharacterList from './components/CharacterList';
import Character from './components/Character';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={CharacterList}/>
        <Route path="/:id" component={Character}/>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
