import Home from './pages/Home.js';
import About from './pages/About.js';
import React, { useState, useEffect } from 'react';

const pagesMap = {
  'http://localhost:3000/home': Home,
  'http://localhost:3000/about': About,
};

const App = () => {
  const [page, setPage] = useState(window.location.href || 'http://localhost:3000/home');

  useEffect(() => {
    const handlePopState = () => setPage(window.location.href || 'http://localhost:3000/home');
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleClick = (newPage) => {
    window.history.replaceState({}, '', newPage);
    setPage('http://localhost:3000' + newPage);
  };

  const SelectedPage = pagesMap[page] || Home;

  return (
    <>
      <div className="blogger">
        <div className="header">
          <nav>
            <ul>
              <li><a onClick={() => handleClick('/home')} href="/home">Home</a></li>
              <li><a onClick={() => handleClick('/about')} href="/about">About</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <SelectedPage />
    </>
  );
}

export default App;
