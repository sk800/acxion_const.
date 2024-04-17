import React from 'react'
import { Link } from 'react-router-dom';
const Vendor_Header = () => {
  return (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
    <nav>
        <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center' }}>
            <li style={{ margin: '0 10px' }}><Link to="/">Home</Link></li>
            <li style={{ margin: '0 10px' }}><Link to="/login">User_Login</Link></li>
            <li style={{ margin: '0 10px' }}><Link to="/signup">User-Sign Up</Link></li>
            <li style={{ margin: '0 10px' }}><Link to="/admin_login">Admin-Login</Link></li>
            <li style={{ margin: '0 10px' }}><Link to="/admin_signup">Admin-SignUp</Link></li>
            <li style={{ margin: '0 10px' }}><Link to="/vendor_login">Vendor-Login</Link></li>
            <li style={{ margin: '0 10px' }}><Link to="/vendor_signup">Vendor-Signup</Link></li>

            <li style={{ margin: '0 10px' }}><Link to="/youritems">YourItems</Link></li>
            <li style={{ margin: '0 10px' }}><Link to="/additem">AddItem</Link></li>
            <li style={{ margin: '0 10px' }}><Link to="/transection">Transection</Link></li>
            
            {/* Add more navigation links as needed */}
        </ul>
    </nav>
</header>
  )
}

export default Vendor_Header