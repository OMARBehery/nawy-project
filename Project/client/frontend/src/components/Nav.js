import { Link } from "react-router-dom";
import img from './nawy.svg'
const Nav = () => {
  return (
    <nav className="navbar">
      <img src={img} alt="" />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/addapart" style={{ 
          color: 'white', 
          backgroundColor: 'rgb(255,140,0)',
          borderRadius: '8px' 
        }}>ADD</Link>
      </div>
    </nav>
  );
}
 
export default Nav;