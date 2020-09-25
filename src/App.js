import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import VideoUpload from './container/VideoUpload/VideoUpload';
import PatternDiscovery from './container/PatternDiscovery/PatternDiscover'

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={PatternDiscovery}></Route>
        <Route path="/dynamic" component={VideoUpload}></Route>
      </Router>
    </div>
  );
}

export default App;
