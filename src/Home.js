import { Link } from "react-router-dom";
import keyboardOneImage from './images/image1.jpg';
import keyboardTwoImage from './images/image2.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-section">
        <div className="card">
          <img src={keyboardOneImage} alt="Keyboard One" />
          <div className="card-content">
            <h2>Keyboard One</h2>
            <p>The best of the best for the enthusiasts, professionals, and gamers.</p>
            <li><Link to="/Shop">Shop Now</Link></li>
          </div>
        </div>
        <div className="card">
          <img src={keyboardTwoImage} alt="Keyboard Two" />
          <div className="card-content">
            <h2>Keyboard Two</h2>
            <p>Incredible value for money.</p>
            <li><Link to="/Shop">Shop Now</Link></li>
          </div>
        </div>
      </section>
    </div>
  );
};

  
  export default Home;