import React from 'react'
import { NavLink } from 'react-router-dom'
import { setPageTitle } from '../utils/set-page-title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
  setPageTitle('Задачи мудрецов')
  const assetsOrigin = '/assets/home/'

  return (
    <>
      <h1 className="display-5 mb-3 text-center">Добро пожаловать!</h1>
      <img src={`${assetsOrigin}greeting.png`}
        alt="Greeting sage"
        className="d-block w-50 mx-auto"
      />
      <p className="lead text-indent">
        Рад приветствовать Вас на своём сайте, уверен, Вы найдёте здесь то, что придётся Вам по душе
      </p>
      <p className="text-indent pb-3">
        Здесь собраны самые разнообразные задачи, требующие гибкости мышления, умения проводить рассуждения,
        создавать стратегии, анализировать данные и выделять ключевую информацию. Задачи заинтересуют
        пытливые умы, независимо от возраста и любых других обстоятельств, а также помогут поддерживать в
        тонусе извилины и интересно провести досуг
      </p>
      
      <hr className="my-4" />

      <h2 className="text-center">Какая от этого польза?</h2>
      <p className="text-indent">
        Как часто вы решаете логические задачи?
        Кто ответит, что очень часто, а кто то будет вынужден признать,
        что давненько не упражнял свои мозги. А зря. Такие задачки очень полезны,
        не только в плане развития логического мышления, а даже в плане снятия напряжения.
      </p>
      <img src={`${assetsOrigin}benefit.png`}
        alt="Польза задач"
        className="d-block d-md-none w-50 mx-auto my-3"
      />
      <p className="text-indent pb-3">
        <img src={`${assetsOrigin}benefit.png`}
          alt="Польза задач"
          className="d-none d-md-block w-35 w-lg-30 float-left"
        />
        Вот допустим у вас был напряженный день. Много сложных, конфликтных ситуаций,
        в общем день не удался во всех отношениях. И как обычный человек, вы всю эту «чехарду»,
        носите у себя в голове, обдумываете и анализируете, раз за разом, переживая,
        снова и снова эти неприятные ситуации, и переживания. Казалось бы, что проще,
        выброси из головы и дело с концом. А не так это бывает и просто, взять и выбросить.
        И вот для таких случаев то и нужны логические задачи.
        В момент, переключат ваше внимание с неприютных мыслей на решение задачи.
        А когда задача решена, вы в изумлении понимаете, что проблема,
        в виде тяжелых мыслей о прожитом дне, испарилась как и не бывало.
      </p>
      
      <hr/>
      
      <h2 className="text-center">Какие задачи Вы найдёте здесь?</h2>
      <div className="pb-3">
        <p className="text-indent clearfix mb-0">
          <img src={`${assetsOrigin}types.png`}
            alt="Виды задач"
            className="d-none d-md-block w-30 w-lg-25 float-right"
          />
          На моём сайте представлены задачи различных типов, разбитых по категориям. Вы найдёте
          задачи на установление правильного порядка, установление истинности высказываний,
          создание выигрышных игровых стратегий и многие другие. К каждой задаче предоставлено
          исчерпывающее решение. Вы обязательно найдёте то, что придётся Вам по душе.
          Задачи для мудрецов разнообразят досуг, и помогут с пользой провести время.
          Коллекция задач постоянно пополняется.
        </p>
        <img src={`${assetsOrigin}types.png`}
          alt="Виды задач"
          className="d-md-none d-block w-50 mx-auto my-3"
        />
        <br/>
        <p className="text-indent pb-3">
          Здесь собраны самые разнообразные задачи, требующие гибкости мышления, умения проводить рассуждения,
          создавать стратегии, анализировать данные и выделять ключевую информацию. Задачи заинтересуют
          пытливые умы, независимо от возраста и любых других обстоятельств, а также помогут поддерживать в
          тонусе извилины и интересно провести досуг
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <NavLink className="btn btn-info px-3 py-2" to="/tasks/">
            Перейти к задачам
            <FontAwesomeIcon className="ml-2" icon={faPuzzlePiece} />
          </NavLink>
        </div>
      </div>
      {/* <hr className="my-4" /> */}

      {/* <h2 className="text-center">Связь со мной</h2>
      <p className="text-indent pb-3">
        Вы можете предложить свои задачи, оставить своё мнение о сайте,
        связавшись со мной любым способом, указанным на сайте.
      </p> */}
      {/* <blockquote className="blockquote">
        <p className="mb-0">
          Образование придает человеку достоинство, да и раб начинает сознавать, 
          что он не рожден для рабства.
        </p>
        <footer className="blockquote-footer"><cite title="Дидро Д.">Дидро Д.</cite></footer>
      </blockquote> */}
      {/* <p className="lead">
        <NavLink className="btn btn-info btn" to="/tasks/" role="button">
          Перейти к задачам
          <FontAwesomeIcon icon={faPuzzlePiece} className="ml-2" />
        </NavLink>
      </p> */}
    </>
  )
}