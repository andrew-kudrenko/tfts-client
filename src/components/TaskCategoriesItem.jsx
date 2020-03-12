import React from 'react'
import { NavLink } from 'react-router-dom'

export const TaskCategoriesItem = ({ title, description, alias }) => (
  <div className="col-md-9 col-lg-6 mb-4 mx-auto">
    <div className="card shadow-sm">
      <div className="card-header text-info">{title}</div>
      <div className="card-body">
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <NavLink to={`${alias}/`} className="btn btn-info">Приступить к решению</NavLink>
      </div>
    </div>
  </div>
)