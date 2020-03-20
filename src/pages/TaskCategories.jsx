import React from 'react'
import { TaskCategoriesItem } from '../components/TaskCategoriesItem'
import { Loader } from '../components/Loader'
import { setPageTitle } from '../utils/set-page-title'

export const TaskCategories = ({ categories }) => {
  setPageTitle('Категории задач')
  
  return (
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
}
