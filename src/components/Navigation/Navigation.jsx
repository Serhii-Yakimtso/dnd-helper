import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/" end>
        Home page
      </NavLink>
      <NavLink to="/about">About page</NavLink>
    </nav>
  );
}

export default Navigation;
