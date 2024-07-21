import { Link } from "react-router-dom";
import { useState } from "react";
import keyboardsizes from './images/keyboardsizes.jpg';

const Build3Fr = () => {
    const [selectedSize, setSelectedSize] = useState('');
  
    const handleRadioChange = (event) => {
      setSelectedSize(event.target.value);
    };
  
    return (
      <div className="build-your-own-keyboard container mt-5">
        <h2>Construir ton propre clavier</h2>
        <div className="d-flex align-items-start">
          <div className="content">
            <li><Link to="/build2">Retour</Link></li>
            <button type="submit" className="btn btn-danger mb-3">Sauvegarder</button>
            <p>Construire ton propre clavier {'>'} Sélectionner le switch {'>'} Sélectionner la taille du clavier</p>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="100%"
                    checked={selectedSize === '100%'}
                    onChange={handleRadioChange}
                  /> Clavier 100%
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="96%"
                    checked={selectedSize === '96%'}
                    onChange={handleRadioChange}
                  /> Clavier 96%
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="80%"
                    checked={selectedSize === '80%'}
                    onChange={handleRadioChange}
                  /> Clavier 80%
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="75%"
                    checked={selectedSize === '75%'}
                    onChange={handleRadioChange}
                  /> Clavier 75%
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="65%"
                    checked={selectedSize === '65%'}
                    onChange={handleRadioChange}
                  /> Clavier 65%
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="60%"
                    checked={selectedSize === '60%'}
                    onChange={handleRadioChange}
                  /> Clavier 60%
                </label>
              </li>
            </ul>
            <li><Link to="/Buynow">Sélectionner la taille du clavier</Link></li>
          </div>
          <img src={keyboardsizes} alt="Keyboard Sizes" className="keyboardsizes-image ms-4" />
        </div>
      </div>
    );
  };
  
  export default Build3Fr;
