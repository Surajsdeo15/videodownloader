import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import BgRemoverPage from '../Pages/BgRemoverPage';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/bg-remover-images" element={<BgRemoverPage />} />
    </Routes>
  );
}

export default Routers;
