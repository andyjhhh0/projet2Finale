import { Link } from "react-router-dom";
import keyboardOneImage from './images/image1.jpg';
import keyboardTwoImage from './images/image2.jpg';

const HomeFr = () => {
  return (
    <div className="home-container">
      <section className="home-section">
        <div className="card">
          <img src={keyboardOneImage} alt="Keyboard One" />
          <div className="card-content">
            <h2>Keyboard One</h2>
            <p>Le meilleur du meilleur pour les passionnés, les professionnels et les joueurs.</p>
            <li><Link to="/Shop">Acheter maintenant</Link></li>
          </div>
        </div>
        <div className="card">
          <img src={keyboardTwoImage} alt="Keyboard Two" />
          <div className="card-content">
            <h2>Keyboard Two</h2>
            <p>Un rapport qualité/prix incroyable.</p>
            <li><Link to="/Shop">Acheter maintenant</Link></li>
          </div>
        </div>
      </section>
    </div>
  );
};

  
  export default HomeFr;