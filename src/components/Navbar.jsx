import { FileText, LayoutDashboard, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex flex-col items-center fixed left-0 top-0 h-full w-64">
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
