import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin-nav.css';

export const AdminNav = () => {
    const nav = useNavigate();

    return (
        <div className="admin-main-container">
            <div className="admin-header">
                <h4 className='admin-logo'>
                    E-Cart Admin
                </h4>
            </div>
            <div className="admin-sidebar">
                <div className='admin-menu' onClick={() => nav("/dashboard")}>
                    <h4 className='admin-btn'>Dashboard</h4>
                </div>
                <div className='admin-menu' onClick={() => nav("/viewproduct")}>
                    <h4 className='admin-btn'>View Products</h4>
                </div>
                <div className='admin-menu' onClick={() => nav("/viewuser")}>
                    <h4 className='admin-btn'>View Registered Users</h4>
                </div>
                <div className='admin-menu' onClick={() => nav("/addproduct")}>
                    <h4 className='admin-btn'>Add Products</h4>
                </div>
            </div>
        </div>
    );
};

// export default AdminNav;
