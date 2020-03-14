import React from 'react'
import { NavLink } from 'react-router-dom'

export const TaskCategoriesItem = ({ title, alias, preview }) => (
  <div className="col-md-10 col-lg-9 col-xl-7 mb-3 mx-auto">
    <div className="card shadow-sm">
      <div className="card-header text-info">{title}</div>
      <div className="card-body">
        <p className="card-text pre-wrap">{preview}</p>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <NavLink to={`${alias}/`} className="btn btn-info">Приступить к решению</NavLink>
      </div>
    </div>
  </div>
)