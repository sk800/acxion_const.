import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import AdminLogin from "./AdminLogin"
import AdminSignup from "./AdminSignup"
import VendorLogin from "./VendorLogin"
import VendorSignup from "./VendorSignup"
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/"  element={<Home/>}/>
            
          <Route path="/login"  element={<Login/>}/>
            
          <Route path="/signup"  element={<Signup/>}/>
          
          <Route path="/admin_login"   element={<AdminLogin/>}/>
          <Route path="/admin_signup" element={<AdminSignup/>}/>
          <Route path="/vendor_login"   element={<VendorLogin/>}/>
          <Route path="/vendor_signup" element={<VendorSignup/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

