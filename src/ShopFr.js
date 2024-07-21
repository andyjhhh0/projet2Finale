import { Link } from "react-router-dom";
import keyboardOneImage from './images/image1.jpg';
import keyboardTwoImage from './images/image2.jpg';

const Shop = () => {
  const keyboards = [
    {
      name: "HyperStrike X7",
      description: "Le HyperStrike X7 est équipé de switches Cherry MX Red pour une frappe fluide et réactive.",
      image: keyboardOneImage
    },
    {
      name: "ProType Elite",
      description: "Le ProType Elite propose des switches Cherry MX Brown avec un retour tactile et une opération silencieuse.",
      image: keyboardTwoImage
    },
    {
      name: "StealthBoard 3000",
      description: "Les switches profil bas et le design élégant du StealthBoard 3000 sont parfaits pour les environnements de bureau et de jeu.",
      image: keyboardOneImage
    },
    {
      name: "Gamer's Fury",
      description: "Le Gamer's Fury avec ses switches Cherry MX Blue offre une frappe audible et clicky.",
      image: keyboardTwoImage
    },
    {
      name: "OfficeMaster Pro",
      description: "Le OfficeMaster Pro est conçu pour les professionnels avec ses switches Cherry MX Silent et une disposition ergonomique pour réduire la fatigue lors de la frappe.",
      image: keyboardOneImage
    },
    {
      name: "RGB Spectra",
      description: "Le RGB Spectra offre un rétroéclairage RGB dynamique et des switches interchangeables à chaud pour une personnalisation totale. Idéal pour les utilisateurs qui souhaitent personnaliser leur expérience de frappe.",
      image: keyboardTwoImage
    }
  ];

  return (
    <div className="shop-keyboards container mt-5">
      <div className="shop-content">
        <div className="filter">
          <h5>Filtrer</h5>
          <div className="filter-section">
            <h6>Type de Switch</h6>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="linear" />
              <label className="form-check-label" htmlFor="linear">Linéaire</label>
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
            <h6>Prix</h6>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="priceUnder50" />
              <label className="form-check-label" htmlFor="priceUnder50">Moins de 50 $</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="price50to100" />
              <label className="form-check-label" htmlFor="price50to100">50 $ - 100 $</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="priceOver100" />
              <label className="form-check-label" htmlFor="priceOver100">Plus de 100 $</label>
            </div>
          </div>
        </div>
        <div className="product-cards">
          {keyboards.map((keyboard, index) => (
            <div className="card1" key={index}>
              <img src={keyboard.image} className="card-img-top" alt={`Clavier ${index + 1}`} />
              <div className="card1-body">
                <h5 className="card1-title">{keyboard.name}</h5>
                <p className="card1-text">{keyboard.description}</p>
                <li><Link to="/Shop">Acheter maintenant</Link></li>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
