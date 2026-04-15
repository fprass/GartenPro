import { FileText, LayoutDashboard, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex flex-col items-center fixed left-0 top-0 h-full w-64 p-4 bg-green-800 text-white">
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 p-3 rounded-lg ${isActive ? "bg-green-600" : "hover:bg-green-700"}`
          }
          to="/"
        >
          <LayoutDashboard />
          <label>Dashboard</label>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 p-3 rounded-lg ${isActive ? "bg-green-600" : "hover:bg-green-700"}`
          }
          to="/Customer"
        >
          <Users />
          <label>Kunde</label>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 p-3 rounded-lg ${isActive ? "bg-green-600" : "hover:bg-green-700"}`
          }
          to="/Offer"
        >
          <FileText />
          <label>Angebot</label>
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
