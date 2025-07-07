// App.jsx (Conceptual)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Component/Home.jsx';
import Vehicle from './Component/Vehicles.jsx';
import Company from './Component/Company.jsx';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/vehicles">Vehicles</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicle />} />
        <Route path="/company" element={<Company />} />
      
      </Routes>
    </Router>
  );
}

export default App;