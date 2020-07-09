import React from "react";
import Landing from "./Landing";
import Game from "./Game";
import CreateADeck from "./CreateADeck";
import EditADeck from "./EditADeck";
import Admin from "./Admin";
import PlayerInfo from "./PlayerInfo";
import EmptyPage from "./EmptyPage";
import CreateGame from "./CreateGame";
import PublicGames from "./PublicGames";
import HowToPlay from "./HowToPlay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";

class App extends React.Component {
  componentDidMount() {
    // initialize analytics
    if (process.env.NODE_ENV === "production") {
      this.initializeReactGA();
    }
  }

  initializeReactGA = () => {
    ReactGA.initialize("UA-171045081-1");
    ReactGA.pageview("/");
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/g/:roomId">
            <Game reactGA={ReactGA} />
          </Route>
          <Route path="/create-deck">
            <CreateADeck title="Cards of Personality: Create Deck" reactGA={ReactGA} />
          </Route>
          <Route path="/edit-deck">
            <EditADeck title="Cards of Personality: Edit Deck" reactGA={ReactGA} />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/player-info">
            <PlayerInfo />
          </Route>
          <Route exact path="/create-game">
            <CreateGame reactGA={ReactGA} />
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
}

export default App;
