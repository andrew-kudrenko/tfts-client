import React from 'react'
import { NavLink } from 'react-router-dom'

export const TaskListItem = ({ index }) => (
  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
    <NavLink to={`${index}`} className="btn btn-lg btn-info w-100 stretched-link py-2">{index + 1}</NavLink>
  </div>
)