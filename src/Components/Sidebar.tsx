import React from 'react';
import './Sidebar.css'; // Make sure to create a corresponding CSS file for styling

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>Categories</h2>
            <ul>
                <li>Electronics</li>
                <li>Fashion</li>
                <li>Home & Garden</li>
                <li>Sports</li>
                <li>Health & Beauty</li>
            </ul>
        </div>
    );
};

export default Sidebar;