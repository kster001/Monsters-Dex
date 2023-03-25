import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.css';

const Navigation = () => (
    <div>
      <div className='title'>
        <h1><span>KAIJU</span> DEX</h1>
      </div>
     
      <div>
        <Link className="nav-btn" to='/'>
          Home
        </Link>
        <Link className="nav-btn" to='/add'>
          Add Character
        </Link>
      </div>
      <Outlet />
    </div>
);

export default Navigation;
  