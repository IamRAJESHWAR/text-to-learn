import React from 'react';
import { Link } from 'react-router-dom';

const SidebarNavigation = () => (
  <nav style={{ width: 220, background: '#f4f4f4', height: '100vh', padding: 20 }}>
    <h2>Text-to-Learn</h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/courses">Courses</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
  </nav>
);

export default SidebarNavigation;
