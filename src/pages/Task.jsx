import React from 'react'

export const Task = ({ title, condition, solution }) => (
  <div className="row">
    <div className="col-sm-10 col-xl-8 mx-auto">
      <h2 className="card-title text-center">{title}</h2>
      <hr />
      <div className="card mx-auto mb-3 shadow-sm">
        <div className="card-header">
          <h5 className="card-title text-center">Условие задачи</h5>
        </div>
        <div className="card-body">
          <p className="card-text" style={{minHeight: '75px'}}>{condition}</p>
          <hr/>
          <div className="card- d-flex justify-content-center">
            <button className="btn btn-info"
              type="button"
              data-toggle="collapse"
              data-target="#collapseSolution"
              aria-expanded="false"
              aria-controls="collapseSolution"
            >
              Показать решение
          </button>
          </div>
        </div>
      </div>

      <div className="collapse" id="collapseSolution">
        <div className="card shadow-sm">
          <div className="card-header">
            <h5 className="card-title text-center">Решение</h5>
          </div>
          <div className="card-body shadow-sm">
            <p className="card-text">{solution}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)