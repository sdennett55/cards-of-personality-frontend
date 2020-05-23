import React from 'react';
import Game from './Game';
import CreateADeck from './CreateADeck';
import EditADeck from './EditADeck';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Game />
        </Route>
        <Route path="/create-deck">
          <CreateADeck title="Cards Against Steve: Create Deck" />
        </Route>
        <Route path="/edit-deck">
          <EditADeck title="Cards Against Steve: Edit Deck" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;