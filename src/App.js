import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './Nav';
//import About from './About';
//import Shop from './Shop';
//import ItemDetail from './ItemDetail';
import CharacterList from './CharacterList';
import Character from './Character';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>

        
        {/* <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" exact component={CharacterList}/>
        <Route path="/shop/:id" component={Character}/> */}
        <Route path="/" exact component={CharacterList}/>
        <Route path="/:id" component={Character}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

export default App;
