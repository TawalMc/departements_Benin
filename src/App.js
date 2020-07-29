/** Library */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

/** Pages */
import Home from "./Pages/Home";
import GamePage from "./Pages/GamePage";
import ScorePage from "./Pages/ScorePage";

/** Css */
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/gamepage" component={GamePage} />
          <Route path="/scorePage" component={ScorePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

