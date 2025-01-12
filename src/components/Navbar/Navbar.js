import './Navbar.css';
import logo from '../../assets/cropped-logo-final-mpdd-1920x1130.png'

function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} className='Logo'/>
      
    </div>
  );
}

export default Navbar;