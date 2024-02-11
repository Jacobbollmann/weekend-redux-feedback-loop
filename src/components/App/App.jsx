import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom/cjs/react-router-dom.min';

import './App.css';

//Components
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../Thank-you/Thank-you';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Redirect to="/feeling" />
          <div>
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
        <Route path="/thank-you">
          <ThankYou />
        </Route>
      </Router>
    </div>
  );
}

export default App;
