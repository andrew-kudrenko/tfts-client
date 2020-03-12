import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Layout } from './components/Layout'

import { TaskCategories } from './pages/TaskCategories'
import { TaskList } from './pages/TaskList'
import { Task } from './pages/Task'
import { About } from './pages/About'
import { Guides } from './pages/Guides'

const splitLocationPath = (separator = '/') => window.location.pathname.split(separator).filter(str => str.length)

const categories = [
  { alias: 'right-order', title: 'Задачи на правильный порядок', description: 'Суть представленных задач предельно проста: нужно лишь выстроить верный порядок, восстановить, так, сказать, последовательность в хаосе, отпраздновать торжество порядка!' },
  { alias: 'right-option', title: 'Задачи на выбор правильного ответа', description: 'Здесь нужно лишь выбрать правильный ответ среди представленных' },
  { alias: 'tournment', title: 'Турнирные задачи', description: 'Турнирные задачи. Эти все сказано(нет)' },
  { alias: 'numbers', title: 'Числовые ребусы', description: 'Числовые головоломки, которые заставят тебя попотеть...' }
]

const tasks = {
  'right-option': [
    { title: 'Задача на правильный вариант 1', condition: 'Вопрос задачи', solution: 'Решение задачи на верный вариант 1' },
    { title: 'Задача на правильный вариант 2', condition: 'Вопрос задачи', solution: 'Решение задачи на верный вариант 2' },
    { title: 'Задача на правильный вариант 3', condition: 'Вопрос задачи', solution: 'Решение задачи на верный вариант 3' },
    { title: 'Задача на правильный вариант 4', condition: 'Вопрос задачи', solution: 'Решение задачи на верный вариант 4' }
  ],
  'right-order': [
    { title: 'Задача на верный порядок 1', condition: 'Вопрос задачи', solution: 'Решение задачи на верный порядок 1' },
    { title: 'Задача на верный порядок 2', condition: 'Вопрос задачи', solution: 'Решение задачи на верный порядок 2' },
    { title: 'Задача на верный порядок 3', condition: 'Вопрос задачи', solution: 'Решение задачи на верный порядок 3' },
    { title: 'Задача на верный порядок 4', condition: 'Вопрос задачи', solution: 'Решение задачи на верный порядок 4' }
  ],
  'tournment': [
    { title: 'Турнирная задача 1', condition: 'Вопрос задачи', solution: 'Решение турнирной задачи 1' },
    { title: 'Турнирная задача 2', condition: 'Вопрос задачи', solution: 'Решение турнирной задачи 2' },
    { title: 'Турнирная задача 3', condition: 'Вопрос задачи', solution: 'Решение турнирной задачи 3' },
    { title: 'Турнирная задача 4', condition: 'Вопрос задачи', solution: 'Решение турнирной задачи 4' }
  ],
  'numbers': [
    { title: 'Числовой ребус 1', condition: 'Вопрос задачи', solution: 'Решение Числовой ребус 1' },
    { title: 'Числовой ребус 2', condition: 'Вопрос задачи', solution: 'Решение Числовой ребус 2' },
    { title: 'Числовой ребус 3', condition: 'Вопрос задачи', solution: 'Решение Числовой ребус 3' },
    { title: 'Числовой ребус 4', condition: 'Вопрос задачи', solution: 'Решение Числовой ребус 4' }
  ]
}

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: null,
      tasks: null
    }
  }

  componentDidMount() {
    if (!this.categories)
      this.setState({ categories })

    if (!this.tasks)
      this.setState({ tasks })
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/tasks"
            exact
            render={() => <TaskCategories categories={this.state.categories} />}
          />
          <Route path="/tasks/:category"
            exact
            render={() => {
              if (this.state.tasks && this.state.categories) {
                const [, category] = splitLocationPath()
                const currentCategory = this.state.categories.find(item => item.alias === category) 
  
                return <TaskList tasksCount={this.state.tasks[category].length} category={currentCategory} />
              }

              return null
            }}
          />
          <Route path="/tasks/:category/:id"
          exact
          render={() => {
            if (this.state.tasks && this.state.categories) {
              const [, category, id] = splitLocationPath()
              return <Task {...this.state.tasks[category][id]} />
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