import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Layout } from './components/Layout'

import { TaskCategories } from './pages/TaskCategories'
import { TaskList } from './pages/TaskList'
import { Task } from './pages/Task'
import { About } from './pages/About'
import { Home } from './pages/Home'

export const App = props => {
  const [tasks, setTasks] = useState(null)
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    const baseUrl = 'https://tfts-admin-panel.herokuapp.com'

    fetch(`${baseUrl}/categories`)
      .then(response => response.json())
      .then(categories => {
        setCategories(categories)
      })
      .then(() =>
        fetch(`${baseUrl}/tasks`)
          .then(response => response.json())
          .then(tasks => setTasks(tasks))
          .catch(err => console.log(err))
      )
      .catch(err => console.log(err))
  }, [])

  return (
    <Layout>
      <Switch>
        <Route path="/home"
          exact
          component={Home}
        />
        <Route path="/tasks"
          exact
          render={() => <TaskCategories categories={categories} />}
        />
        <Route path="/tasks/:category"
          exact
          render={() => <TaskList {...props} tasks={tasks} categories={categories} />}
        />
        <Route path="/tasks/:category/:id"
          exact
          render={() => <Task tasks={tasks} />}
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