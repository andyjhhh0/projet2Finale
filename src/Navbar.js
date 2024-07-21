import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <li><Link to="/"style={{
                fontSize: 30,
            }}>MechanicalKeyboardsPro</Link></li>

            <div className="links"></div>

            <li><Link to="/Shop">Shop Keyboards</Link></li>
            <li><Link to="/LatestNews">Latest News</Link></li>
            <li><Link to="/Build">Build your own Keyboard</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li><Link to="/FAQ">FAQ</Link></li>
            <li><Link to="/LogIn">Log In/Out</Link></li>
        </nav>
     );
}
 
export default Navbar;