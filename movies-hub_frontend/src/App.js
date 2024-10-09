import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CastEntry from './components/Cast/CastEntry';
import MovieEntry from './components/MovieEntry/movieEntry'; 

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/castEntry">Cast Entry</Link>
            </li>
            <li>
              <Link to="/movieEntry">Movie Entry</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/castEntry" element={<CastEntry />} />
          <Route path="/movieEntry" element={<MovieEntry />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
