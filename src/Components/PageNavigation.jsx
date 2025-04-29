import { NavLink } from "react-router-dom"
import React from "react";

const linkStyle = ({ isActive }) => ({
    margin: "0 10px",
    padding: "8px 16px",
    borderRadius: "8px",
    textDecoration: "none",
    color: isActive ? "white" : "#333",
    backgroundColor: isActive ? "#1976d2" : "#e0e0e0",
  });

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "center",
      padding: "12px",
      backgroundColor: "#f5f5f5",
      borderBottom: "1px solid #ddd",
    },
}


function PageNavigation() {
    
      
    return (
        <nav style={styles.navbar}>
            <NavLink to="/" style={linkStyle}>Home</NavLink>
            <NavLink to="/products" style={linkStyle}>Product</NavLink>
            <NavLink to="/about" style={linkStyle}>About Us</NavLink>
            
        </nav>
    );
}

    

export default PageNavigation
