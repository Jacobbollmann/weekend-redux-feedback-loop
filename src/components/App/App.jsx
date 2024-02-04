import React from 'react';
import axios from 'axios';
import './App.css';

//Components
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>
      <div>
        <Feeling />
        <Understanding />
        <Support />
        <Comments />
      </div>
    </>
  );
}

export default App;
