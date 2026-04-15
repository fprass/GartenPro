import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Customer from "./pages/Customer";
import Dashboard from "./pages/Dashboard";
import Offer from "./pages/Offer";

function App() {
  return (
    <>
      <section id="app" className="ml-64">
        <h1>GartenApp</h1>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/Customer" element={<Customer />}></Route>
          <Route path="/Offer" element={<Offer />}></Route>
        </Routes>
      </section>
    </>
  );
}

export default App;
