import './Navbar.scss';
import logo from '../../images/logo.png';

function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt='logo of foodelicious' />
      <h1>FooDelicious</h1>
    </div>
  );
}

export default Navbar;
