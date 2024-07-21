import { Link } from "react-router-dom";
const NavbarFr = () => {
    return ( 
        <nav className="navbar">
            <li><Link to="/"style={{
                fontSize: 30,
            }}>MechanicalKeyboardsPro</Link></li>

            <div className="links"></div>

            <li><Link to="/Shop">Acheter des claviers</Link></li>
            <li><Link to="/LatestNews">Dernières nouvelles</Link></li>
            <li><Link to="/Build">Construir ton propre clavier</Link></li>
            <li><Link to="/Contact">Contactez-nous</Link></li>
            <li><Link to="/FAQ">FAQ</Link></li>
            <li><Link to="/LogIn">Connexion/Déconnexion</Link></li>
        </nav>
     );
}
 
export default NavbarFr;