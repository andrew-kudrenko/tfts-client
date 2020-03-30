import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

export const TaskCategoriesItem = ({ title, alias, preview, img }) => (
  <div className="col-lg-10 col-xl-9 mb-3 mx-auto">
    <div className="card shadow-sm task-category">
      <div className="card-header text-info">{title}</div>
      <div className="card-body">
        <p className="card-text pre-wrap">
          <img className="w-35 d-none d-sm-block float-right" 
            src={img} 
            alt="Category item" 
          />
          {preview}
        </p>
        <img className="w-75 w-xs-50 d-block mx-auto d-sm-none" 
            src={img} 
            alt="Category item" 
          />
      </div>
      <div className="card-footer d-flex justify-content-center">
        <NavLink to={`${alias}/`} className="btn btn-info px-3">
          Далее
          <FontAwesomeIcon icon={faPuzzlePiece} className="ml-2" />
        </NavLink>
      </div>
    </div>
  </div>
)