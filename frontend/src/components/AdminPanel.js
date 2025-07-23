import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPanel.css';

function AdminPanel() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users/all');
        setApplications(res.data);
      } catch (error) {
        alert('Failed to load applications.');
      }
    };
    fetchApplications();
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, { status: newStatus });
      setApplications(applications.map(app =>
        app._id === id ? { ...app, status: newStatus } : app
      ));
    } catch (error) {
      alert('Failed to update status.');
    }
  };

  return (
    <div className="admin-container">
      <div className="overlay"></div>
      <div className="admin-card">
        <h1 className="admin-title">Admin Panel</h1>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Aadhar</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.length > 0 ? (
              applications.map((app) => (
                <tr key={app._id}>
                  <td>{app.name}</td>
                  <td>{app.aadhar}</td>
                  <td>{app.phone}</td>
                  <td>{app.email}</td>
                  <td className={`status ${app.status}`}>{app.status}</td>
                  <td>
                    <button
                      className="btn-approve"
                      onClick={() => handleStatusUpdate(app._id, 'Approved')}
                    >
                      Approve
                    </button>
                    <button
                      className="btn-reject"
                      onClick={() => handleStatusUpdate(app._id, 'Rejected')}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center' }}>No applications found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPanel;
