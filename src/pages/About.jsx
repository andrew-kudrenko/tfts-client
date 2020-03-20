import React from 'react'
import { setPageTitle } from '../utils/set-page-title'

export const About = () => {
  setPageTitle('О проекте')

  return (
    <>
      <h2 className="text-center">О проекте</h2>
      <hr />
      <p>Пару слов о том, что здесь происходит</p>
    </>
  )
}