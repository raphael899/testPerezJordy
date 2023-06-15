import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApiCosumo from './pages/ApiCosumo';
import EventosList from './pages/EventosList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<EventosList />} />
        <Route exact path="/vista-consumo-api" element={<ApiCosumo />} />
      </Routes>
    </Router>
  );
}

export default App;
