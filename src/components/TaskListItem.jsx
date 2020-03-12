import React from 'react'
import { NavLink } from 'react-router-dom'

export const TaskListItem = ({ index }) => (
  <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title display-2 text-center">{index + 1}</h5>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <NavLink to={`${index}`} className="btn btn-info">Выбрать задачу</NavLink>
      </div>
    </div>
  </div>
)