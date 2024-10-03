import React, { Component } from 'react';
import HomePage from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
