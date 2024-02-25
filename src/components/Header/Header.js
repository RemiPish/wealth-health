import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={logo} alt="Wealth Health Logo" />
            </NavLink>
            <div className="link-container">
                <NavLink className={({ isActive }) =>
                    isActive ? "main-nav-item-active" : "main-nav-item"
                } to="/">
                    Create Employee
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "main-nav-item-active" : "main-nav-item"
                } to="/list">
                    View Current Employee
                </NavLink>
            </div>
        </nav>
    );
}