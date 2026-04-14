import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/Customer">Kunde</NavLink>
        <NavLink to="/Offer">Angebot</NavLink>
      </nav>
    </>
  );
}

export default Navbar;
