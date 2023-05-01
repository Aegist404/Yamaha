import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/user/Home";
import Service from "./page/user/Service";

import LoginAdmin from "./page/login/LoginAdmin"
import Admin from "./page/admin/Admin"
import "./App.css";
import ShowData from "./page/user/ShowData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" title="Home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/UserData" element={<ShowData />} />

        {/* admin */}
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin-home" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
