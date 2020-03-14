import React from 'react'
import { TaskCategoriesItem } from '../components/TaskCategoriesItem'
import { Loader } from '../components/Loader'

export const TaskCategories = ({ categories }) => (
  <>
    <h2 className="text-center">Категории задач</h2>
    <hr />
    <div className="row">
      {categories  
        ? categories.map(category => <TaskCategoriesItem {...category} key={category.alias} />)
        : <div className="col-12"><Loader /></div>
      }
    </div>
  </>
)
