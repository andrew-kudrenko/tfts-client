import React from 'react'
import { Loader } from '../components/Loader'
import { withRouter } from 'react-router-dom'

class TaskWithRouter extends React.Component {
  render() {
    if (this.props.tasks) {
      const { category, id } = this.props.match.params
      const { title, condition, solution } = this.props.tasks.filter(t => t.category === category)[id]

      return (
        <div className="row">
          <div className="col-sm-10 col-xl-8 mx-auto">
            <h2 className="card-title text-center">{title}</h2>
            <hr />
            <div className="card mx-auto mb-3 shadow-sm">
              <div className="card-header">
                <h5 className="card-title text-center">Условие задачи</h5>
              </div>
              <div className="card-body">
                <p className="card-text pre-wrap">{condition}</p>
                <hr />
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
                  <p className="card-text pre-wrap">{solution}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    
    return <Loader />
  }
}

export const Task = withRouter(TaskWithRouter)