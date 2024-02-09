import React from 'react';
import axios from 'axios';
import './App.css';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min';

//Components
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

function App() {
  return (
    <>
      <Router>
        <Route path="/">
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Feedback!</h1>
              <h4>Don't forget it!</h4>
            </header>
          </div>
        </Route>
        <Route path="/feeling">
          <Feeling />
        </Route>
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
      </Router>
    </>
  );
}

export default App;
