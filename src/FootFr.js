import { Link } from "react-router-dom";

const FootFr = () => {
    return ( 
        <nav className="foot">
            <li><Link to="/">MechanicalKeyboardsPro</Link></li>
            <div className="linksfoot"></div>
            <li><Link to="/Shop">Acheter des claviers</Link></li>
            <li><Link to="/LatestNews">Dernières nouvelles</Link></li>
            <li><Link to="/Contact">Contactez-nous</Link></li>
        </nav>
     );
}
 
export default FootFr;