import { Link } from "react-router-dom";
import { useState } from "react";
import switchtypes from './images/switchtypes.jpg';

const Build2Fr = () => {
  const [selectedSwitch, setSelectedSwitch] = useState('');

  const handleRadioChange = (event) => {
    setSelectedSwitch(event.target.value);
  };

  return (
    <div className="build-your-own-keyboard container mt-5">
      <h2>Construire ton propre clavier</h2>
      <div className="d-flex align-items-start">
        <div className="content">
          <button type="submit" className="btn btn-danger mb-3">Sauvegarder</button>
          <p>Construire ton propre clavier {'>'} Sélectionner le Switch</p>
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  name="switch"
                  value="blue"
                  checked={selectedSwitch === 'blue'}
                  onChange={handleRadioChange}
                /> Switches bleus
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="switch"
                  value="brown"
                  checked={selectedSwitch === 'brown'}
                  onChange={handleRadioChange}
                /> Switches marrons
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="switch"
                  value="red"
                  checked={selectedSwitch === 'red'}
                  onChange={handleRadioChange}
                /> Switches rouges
              </label>
            </li>
          </ul>
          <li><Link to="/Build3">Sélectionner le type de switch</Link></li>
        </div>
        <img src={switchtypes} alt="Switch Types" className="switchtypes-image ms-4" />
      </div>
    </div>
  );
};

export default Build2Fr;