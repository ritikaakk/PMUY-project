import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ApplyForm from './components/ApplyForm';
import CheckStatus from './components/CheckStatus';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<ApplyForm />} />
          <Route path="/status" element={<CheckStatus />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
