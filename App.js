import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaffLogin from "./stafflogin";
import AdminLogin from "./adminlogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StaffLogin />} />  {/* Default Route: Staff Login */}
        <Route path="/admin-login" element={<AdminLogin />} /> {/* Admin Login Page */}
      </Routes>
    </Router>
  );
}

export default App;

