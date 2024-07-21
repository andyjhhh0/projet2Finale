import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <div className="log-in container mt-5">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address: </label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password: </label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-danger">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;

