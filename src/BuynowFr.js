import { Link } from "react-router-dom";

const BuynowFr = () => {
  return (
    <div className="build-your-own-keyboard container mt-5">
      <h2>Construir ton propre clavier</h2>
      <li><Link to="/Build3">Retour</Link></li>
      <p>Voilà ta combinaison de actuelle : {'[setup actuelle]'}</p>
      <li>
        <Link to="/">
        <button type="submit" className="btn btn-danger">Acheter maintenant</button>
        </Link>
      </li>
    </div>
  );
};

export default BuynowFr;
