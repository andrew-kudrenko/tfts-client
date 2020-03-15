import React from 'react'
import { NavLink } from 'react-router-dom'

export const TaskListItem = ({ index }) => (
  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
    <div className="card shadow-sm">
      <div className="card-body d-flex justify-content-center">
        <NavLink to={`${index}`} className="btn btn-info stretched-link px-3">{index + 1}</NavLink>
      </div>
    </div>
  </div>
)