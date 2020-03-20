import React from 'react'
import { NavLink } from 'react-router-dom'
import { setPageTitle } from '../utils/set-page-title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
  setPageTitle('Задачи мудрецов')

  return (
    <>
      <div className="jumbotron home-jumbotron">
        <h1 className="display-4 mb-3">Добро пожаловать!</h1>
        <p className="lead">
          Рад приветствовать Вас на своём сайте, уверен, Вы найдёте то, что придётся по душе
      </p>
        <hr className="my-4" />
        <div className="description d-flex justify-content-between">
          <p>
            Здесь собраны самые разнообразные задачи, требующие гибкости мышления, умения проводить рассуждения,
            создавать стратегии, анализировать данные и выделять ключевую информацию. Задачи заинтересуют
            пытливые умы, независимо от возраста и любых других обстоятельств, а также помогут поддерживать в
            тонусе извилины и интересно провести досуг
        </p>
        </div>
        <p className="lead">
          <NavLink className="btn btn-info btn" to="/tasks/" role="button">
            Перейти к задачам
            <FontAwesomeIcon icon={faPuzzlePiece} className="ml-2" />
          </NavLink>
        </p>
      </div>
    </>
  )
}