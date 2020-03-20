import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div className="container">
      <NavLink className="navbar-brand d-flex align-items-center" to="/home">
        <div className="logo-image mr-1" 
          style={{ backgroundImage: 'url(/assets/logo.png)' }}>
        </div>
        <span className="navbar-title">Задачи Мудрецов</span>
      </NavLink>
      <button className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/tasks/">Задачи</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">О проекте</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)