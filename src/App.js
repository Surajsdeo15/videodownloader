import React from 'react';
import Navbar from './Components/Important/Navbar';
import Downloader from './Components/Downloader';
import './App.css';

function App() {
  return (
    <div className="background-container flex flex-col">
      <Navbar />
      <Downloader />
    </div>
  );
}

export default App;
