import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogInFr = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <div className="log-in container mt-5">
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Adresse e-mail: </label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mot de passe: </label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-danger">Se connecter</button>
      </form>
    </div>
  );
};

export default LogInFr;

