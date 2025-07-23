import React, { useState } from 'react';
import axios from 'axios';
import './CheckStatus.css';

function CheckStatus() {
  const [aadhar, setAadhar] = useState('');
  const [status, setStatus] = useState(null);

  const handleCheckStatus = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:5000/api/users/status/${aadhar}`);
      setStatus(res.data);
    } catch (error) {
      alert('Error fetching status. Please try again.');
    }
  };

  return (
    <div className="status-container">
      <div className="overlay"></div>
      <div className="glass-card">
        <h1 className="status-title">Track Your Application Status</h1>
        <p className="status-subtext">Enter your Aadhar number to check the progress</p>
        <form onSubmit={handleCheckStatus} className="status-form">
          <input
            type="text"
            placeholder="Enter Aadhar Number"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            required
          />
          <button type="submit" className="btn-status">Check Status</button>
        </form>
        {status && (
          <div className="status-result">
            <h3>Application Details</h3>
            <table>
              <tbody>
                <tr><td><strong>Name:</strong></td><td>{status.name}</td></tr>
                <tr><td><strong>Aadhar:</strong></td><td>{status.aadhar}</td></tr>
                <tr><td><strong>Address:</strong></td><td>{status.address}</td></tr>
                <tr><td><strong>Phone:</strong></td><td>{status.phone}</td></tr>
                <tr><td><strong>Email:</strong></td><td>{status.email}</td></tr>
                <tr><td><strong>Status:</strong></td><td>{status.status}</td></tr>
                <tr><td><strong>Subsidy:</strong></td><td>{status.subsidyAmount}%</td></tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckStatus;
