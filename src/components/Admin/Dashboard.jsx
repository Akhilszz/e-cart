import React, { useContext } from "react";
import { AdminNav } from "./Admin-nav";
import "./dash.css";
import { myContext } from "../Context/myContext";

export const Dashboard = () => {
    const { registerDetails, products } = useContext(myContext);

    const productCount = Object.keys(products).length;
    const userCount = Object.keys(registerDetails).length;

    // Placeholder for Total Revenue (not implemented in this example)

    return (
        <div className="dashboard-container">
            <AdminNav />
            <div className="dashboard-content">
                <h2 className="dashboard-heading">Dashboard Overview</h2>
                <div className="dashboard-items">
                    <div className="dashboard-item">
                        <div className="dashboard-card">
                            <h4 className="dashboard-title">Number of Products</h4>
                            <h5 className="dashboard-count">{productCount}</h5>
                        </div>
                    </div>
                    <div className="dashboard-item">
                        <div className="dashboard-card">
                            <h4 className="dashboard-title">Number of Users</h4>
                            <h5 className="dashboard-count">{userCount}</h5>
                        </div>
                    </div>
                    <div className="dashboard-item">
                        <div className="dashboard-card">
                            <h4 className="dashboard-title">Total Revenue</h4>
                            <h5 className="dashboard-count">₹ --</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// export default Dashboard;
