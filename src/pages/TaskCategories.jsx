import React from 'react'
import { TaskCategoriesItem } from '../components/TaskCategoriesItem'

export const TaskCategories = ({ categories }) => (
  <>
    <h2 className="text-center">Категории задач</h2>
    <hr />
    <div className="row">
      {categories && categories.map(category => <TaskCategoriesItem {...category} key={category.alias} />)}
    </div>
  </>
)
