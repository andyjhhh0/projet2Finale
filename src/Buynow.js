import { Link } from "react-router-dom";

const Buynow = () => {
  return (
    <div className="build-your-own-keyboard container mt-5">
      <h2>Build Your Own Keyboard</h2>
      <li><Link to="/Build3">Back</Link></li>
      <p>This is your current keyboard combination: {'[current setup]'}</p>
      <li>
        <Link to="/">
        <button type="submit" className="btn btn-danger">Buy Now</button>
        </Link>
      </li>
    </div>
  );
};

export default Buynow;
