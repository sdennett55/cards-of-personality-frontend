import React from 'react';
import Landing from './Landing';
import Game from './Game';
import CreateADeck from './CreateADeck';
import EditADeck from './EditADeck';
import Admin from './Admin';
import PlayerInfo from './PlayerInfo';
import EmptyPage from './EmptyPage';
import CreateGame from './CreateGame';
import PublicGames from './PublicGames';
import HowToPlay from './HowToPlay';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/g/:roomId">
          <Game />
        </Route>
        <Route path="/create-deck">
          <CreateADeck title="Cards of Personality: Create Deck" />
        </Route>
        <Route path="/edit-deck">
          <EditADeck title="Cards of Personality: Edit Deck" />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/player-info">
          <PlayerInfo />
        </Route>
        <Route exact path="/create-game">
          <CreateGame />
        </Route>
        <Route exact path="/games">
          <PublicGames />
        </Route>
        <Route exact path="/how-to-play">
          <HowToPlay isPage />
        </Route>
        <Route>
          <EmptyPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
