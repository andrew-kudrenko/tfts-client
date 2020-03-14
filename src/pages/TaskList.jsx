import React from 'react'
import { TaskListItem } from '../components/TaskListItem'

export const TaskList = ({ tasksCount, category }) => {
  const { title, description } = category

  return (
    <>
      <h2 className="text-center">{title}</h2>
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