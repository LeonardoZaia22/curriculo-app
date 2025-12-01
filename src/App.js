import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CurriculoLeonardo from './components/CurriculoLeonardo';
import CurriculoJoao from './components/CurriculoJoao';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">Currículos App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/curriculo-leonardo">Currículo Leonardo</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/curriculo-joao">Currículo João Paulo</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculo-leonardo" element={<CurriculoLeonardo />} />
          <Route path="/curriculo-joao" element={<CurriculoJoao />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;