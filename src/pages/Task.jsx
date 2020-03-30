import React from 'react'
import { Loader } from '../components/Loader'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faKey } from '@fortawesome/free-solid-svg-icons'
import { setPageTitle } from '../utils/set-page-title'

class TaskWithRouter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpenSolution: false }
  }

  setPageTitle = () => {
    if (this.props.tasks) {
      const { category, id } = this.props.match.params
      const { title } = this.props.tasks.filter(t => t.category === category)[id]

      setPageTitle(title)
    }
  }

  handleClick = () => this.setState({ isOpenSolution: !this.state.isOpenSolution })

  componentDidMount() {
    this.setPageTitle()
  }

  componentDidUpdate() {
    this.setPageTitle()
  }

  render() {
    if (this.props.tasks) {
      const { category, id } = this.props.match.params
      const { title, condition, solution } = this.props.tasks.filter(t => t.category === category)[id]
      const { isOpenSolution } = this.state

      return (
        <div className="row">
          <div className="col-xl-10 mx-auto">
            <h2 className="card-title text-center">{title}</h2>
            <hr />
            <div className="card mx-auto mb-3 shadow-sm">
              <div className="card-header">
                <h5 className="card-title text-center text-info">Условие</h5>
              </div>
              <div className="card-body">
                <p className="card-text pre-wrap" 
                  dangerouslySetInnerHTML={{__html: condition}} 
                />
                <hr />
                <div className="card- d-flex justify-content-center">
                  <button
                    className={`btn btn-${this.state.isOpenSolution ? 'danger' : 'info'}`}
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSolution"
                    aria-expanded="false"
                    aria-controls="collapseSolution"
                    onClick={this.handleClick}
                  >
                    {isOpenSolution ? 'Скрыть' : 'Показать'} решение
                    <FontAwesomeIcon
                      icon={isOpenSolution ? faTimes : faKey}
                      className="ml-2"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="collapse" id="collapseSolution">
              <div className="card shadow-sm">
                <div className="card-header">
                  <h5 className="card-title text-center text-info">Решение</h5>
                </div>
                <div className="card-body shadow-sm">
                  <p className="card-text pre-wrap" 
                    dangerouslySetInnerHTML={{ __html: solution }}
                  />
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