import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Layout } from './components/Layout'

import { TaskCategories } from './pages/TaskCategories'
import { TaskList } from './pages/TaskList'
import { Task } from './pages/Task'
import { About } from './pages/About'
import { Guides } from './pages/Guides'

const splitLocationPath = (separator = '/') => window.location.pathname.split(separator).filter(str => str.length)

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: null,
      tasks: null,
      isFetching: true
    }
  }

  componentDidMount() {
    const baseUrl = 'https://tfts-admin-panel.herokuapp.com'

    fetch(`${baseUrl}/categories`)
      .then(response => response.json())
      .then(categories => this.setState({ categories, isFetching: false }))
      .then(() => {
        fetch(`${baseUrl}/tasks`)
          .then(response => response.json())
          .then(tasks => this.setState({ tasks }))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/tasks"
            exact
            render={() => this.state.isFetching ? <h5>Loading...</h5> : <TaskCategories categories={this.state.categories} />}
          />
          <Route path="/tasks/:category"
            exact
            render={() => {
              const { tasks, categories } = this.state

              if (tasks && categories) {
                const [, category] = splitLocationPath()
                const currentCategory = categories.find(item => item.alias === category)

                return <TaskList tasksCount={tasks.filter(task => task.category === category).length} category={currentCategory} />
              }

              return null
            }}
          />
          <Route path="/tasks/:category/:id"
            exact
            render={() => {
              if (this.state.tasks && this.state.categories) {
                const [, category, id] = splitLocationPath()
                return <Task {...this.state.tasks.filter(task => task.category === category)[id]} />
              }

              return null
            }}
          />
          <Route path="/guides/"
            exact
            render={() => <Guides />}
          />
          <Route path="/about"
            exact
            component={About}
          />
          <Redirect to="/home" />
        </Switch>
      </Layout>
    )
  }
}