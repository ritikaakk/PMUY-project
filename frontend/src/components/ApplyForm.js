import React, { useState } from 'react';
import axios from 'axios';
import './ApplyForm.css';

function ApplyForm() {
  const [formData, setFormData] = useState({
    name: '',
    aadhar: '',
    address: '',
    income: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/apply', formData);
      alert('Application submitted successfully!');
      setFormData({ name: '', aadhar: '', address: '', income: '', phone: '', email: '' }); // reset form
    } catch (error) {
      alert('Submission failed. Please check your details and try again.');
    }
  };

  return (
    <div className="apply-container">
      <div className="overlay"></div>
      <div className="apply-card">
        <h1 className="apply-title">Empower Your Home with Ujjwala Yojana</h1>
        <p className="apply-subtext">Fill the form to apply for LPG benefits under PMUY.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Aadhar Number</label>
            <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Annual Income</label>
            <input type="number" name="income" value={formData.income} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn-submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
}

export default ApplyForm;
