import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Layout } from './components/Layout'

import { TaskCategories } from './pages/TaskCategories'
import { TaskList } from './pages/TaskList'
import { Task } from './pages/Task'
import { About } from './pages/About'
import { Home } from './pages/Home'

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
      .then(() => 
        fetch(`${baseUrl}/tasks`)
          .then(response => response.json())
          .then(tasks => this.setState({ tasks }))
          .catch(err => console.log(err))
      )
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/home"
            exact
            component={Home}
          />
          <Route path="/tasks"
            exact
            render={() => <TaskCategories categories={this.state.categories} />}
          />
          <Route path="/tasks/:category"
            exact
            render={() => <TaskList {...this.props} tasks={this.state.tasks} categories={this.state.categories} />}
          />
          <Route path="/tasks/:category/:id"
            exact
            render={() => <Task tasks={this.state.tasks}  />}
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