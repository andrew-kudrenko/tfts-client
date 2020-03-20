import React from 'react'
import { TaskListItem } from '../components/TaskListItem'
import { Loader } from '../components/Loader'
import { withRouter } from 'react-router-dom'
import { setPageTitle } from '../utils/set-page-title'

class TaskListWithRouter extends React.Component {
  setPageTitle = () => {
    if (this.props.categories) {
      const { params } = this.props.match
      const category = this.props.categories.find(c => c.alias === params.category)
      setPageTitle(category.title)
    }
  }

  componentDidMount() {
    this.setPageTitle()
  }

  componentDidUpdate() {
    this.setPageTitle()
  }

  render() {
    const { categories, tasks } = this.props

    if (categories && tasks) {
      const { params } = this.props.match

      const category = categories.find(c => c.alias === params.category)
      const tasksCount = tasks.filter(t => t.category === category.alias).length

      const { title, description } = category

      return (
        <>
          <h2 className="text-center">{title}</h2>
          <hr />
          <p className="pre-wrap">{description}</p>
          <hr />
          <div className="row">
            {
              new Array(tasksCount)
                .fill(null)
                .map((_, index) => <TaskListItem index={index} key={index} />)
            }
          </div>
        </>
      )
    }

    return <Loader />
  }
}

export const TaskList = withRouter(TaskListWithRouter)