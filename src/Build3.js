import { Link } from "react-router-dom";
import { useState } from "react";
import keyboardsizes from './images/keyboardsizes.jpg';

const Build3 = () => {
    const [selectedSize, setSelectedSize] = useState('');
  
    const handleRadioChange = (event) => {
      setSelectedSize(event.target.value);
    };
  
    return (
      <div className="build-your-own-keyboard container mt-5">
        <h2>Build Your Own Keyboard</h2>
        <div className="d-flex align-items-start">
          <div className="content">
            <li><Link to="/build2">Back</Link></li>
            <button type="submit" className="btn btn-danger mb-3">Save</button>
            <p>Build your own keyboard {'>'} Select switch {'>'} Select keyboard size</p>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="100%"
                    checked={selectedSize === '100%'}
                    onChange={handleRadioChange}
                  /> 100% Keyboard
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
                  /> 96% Keyboard
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
                  /> 80% Keyboard
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
                  /> 75% Keyboard
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
                  /> 65% Keyboard
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
                  /> 60% Keyboard
                </label>
              </li>
            </ul>
            <li><Link to="/Buynow">Select your Keyboard size</Link></li>
          </div>
          <img src={keyboardsizes} alt="Keyboard Sizes" className="keyboardsizes-image ms-4" />
        </div>
      </div>
    );
  };
  
  export default Build3;
