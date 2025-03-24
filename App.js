import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./Forgot_password";
import StaffLogin from "./stafflogin";
import AdminLogin from "./adminlogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StaffLogin />} />  
        <Route path="/admin-login" element={<AdminLogin />} /> 
        <Route path="/Forgot_password" element={<ForgotPassword />} />

      </Routes>
    </Router>
  );
}

export default App;


