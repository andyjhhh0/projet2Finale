import { Link } from "react-router-dom";
import keyboardOneImage from './images/image1.jpg';
import keyboardTwoImage from './images/image2.jpg';

const Shop = () => {
  const keyboards = [
    {
      name: "HyperStrike X7",
      description: "Featuring Cherry MX Red switches for smooth and responsive typing. Customizable RGB backlighting and a durable aluminum frame make it perfect for both gaming and typing.",
      image: keyboardOneImage
    },
    {
      name: "ProType Elite",
      description: "Offers Cherry MX Brown switches with tactile feedback and a quiet operation. Includes programmable macro keys and an ergonomic design for enhanced productivity.",
      image: keyboardTwoImage
    },
    {
      name: "StealthBoard 3000",
      description: "Low-profile switches with a sleek design, ideal for both office and gaming environments. Includes customizable keycaps and a minimalist aesthetic.",
      image: keyboardOneImage
    },
    {
      name: "Gamer's Fury",
      description: "Cherry MX Blue switches provide a clicky and audible typing experience. Features customizable lighting effects and a wrist rest for long gaming sessions.",
      image: keyboardTwoImage
    },
    {
      name: "OfficeMaster Pro",
      description: "Quiet Cherry MX Silent switches with an ergonomic layout to reduce typing fatigue. Ideal for professional settings with its understated design.",
      image: keyboardOneImage
    },
    {
      name: "RGB Spectra",
      description: "Dynamic RGB backlighting and hot-swappable switches for full customization. Perfect for users who want to personalize their typing experience with vibrant colors.",
      image: keyboardTwoImage
    }
  ];

  return (
    <div className="shop-keyboards container mt-5">
      <div className="shop-content">
        <div className="filter">
          <h5>Filter</h5>
          <div className="filter-section">
            <h6>Type of Switch</h6>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="linear" />
              <label className="form-check-label" htmlFor="linear">Linear</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="tactile" />
              <label className="form-check-label" htmlFor="tactile">Tactile</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="clicky" />
              <label className="form-check-label" htmlFor="clicky">Clicky</label>
            </div>
          </div>
          <div className="filter-section">
            <h6>Dimension</h6>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="dimension100" />
              <label className="form-check-label" htmlFor="dimension100">100%</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="dimension96" />
              <label className="form-check-label" htmlFor="dimension96">96%</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="dimension80" />
              <label className="form-check-label" htmlFor="dimension80">80%</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="dimension75" />
              <label className="form-check-label" htmlFor="dimension75">75%</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="dimension65" />
              <label className="form-check-label" htmlFor="dimension65">65%</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="dimension60" />
              <label className="form-check-label" htmlFor="dimension60">60%</label>
            </div>
          </div>
          <div className="filter-section">
            <h6>Price</h6>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="priceUnder50" />
              <label className="form-check-label" htmlFor="priceUnder50">Under $50</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="price50to100" />
              <label className="form-check-label" htmlFor="price50to100">$50 - $100</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="priceOver100" />
              <label className="form-check-label" htmlFor="priceOver100">Over $100</label>
            </div>
          </div>
        </div>
        <div className="product-cards">
          {keyboards.map((keyboard, index) => (
            <div className="card1" key={index}>
              <img src={keyboard.image} className="card-img-top" alt={`Keyboard ${index + 1}`} />
              <div className="card1-body">
                <h5 className="card1-title">{keyboard.name}</h5>
                <p className="card1-text">{keyboard.description}</p>
                <li><Link to="/Shop">Shop Now</Link></li>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
