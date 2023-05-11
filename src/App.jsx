import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ShowList from './components/showList';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>TV Shows</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ShowList />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
