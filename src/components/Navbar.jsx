import { FileText, LayoutDashboard, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex justify-around items-center fixed bottom-0 w-full">
        <NavLink to="/">
          <LayoutDashboard />
          <label>Dashboard</label>
        </NavLink>
        <NavLink to="/Customer">
          <Users />
          <label>Kunde</label>
        </NavLink>
        <NavLink to="/Offer">
          <FileText />
          <label>Angebot</label>
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
