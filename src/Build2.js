import { Link } from "react-router-dom";
import { useState } from "react";
import switchtypes from './images/switchtypes.jpg';

const Build2 = () => {
  const [selectedSwitch, setSelectedSwitch] = useState('');

  const handleRadioChange = (event) => {
    setSelectedSwitch(event.target.value);
  };

  return (
    <div className="build-your-own-keyboard container mt-5">
      <h2>Build Your Own Keyboard</h2>
      <div className="d-flex align-items-start">
        <div className="content">
          <button type="submit" className="btn btn-danger mb-3">Save</button>
          <p>Build your own keyboard {'>'} Select switch</p>
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  name="switch"
                  value="blue"
                  checked={selectedSwitch === 'blue'}
                  onChange={handleRadioChange}
                /> Blue Switches
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
                /> Brown Switches
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
                /> Red Switches
              </label>
            </li>
          </ul>
          <li><Link to="/Build3">Select your switch type</Link></li>
        </div>
        <img src={switchtypes} alt="Switch Types" className="switchtypes-image ms-4" />
      </div>
    </div>
  );
};

export default Build2;