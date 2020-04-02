import React, { useEffect } from 'react'
import { setPageTitle } from '../utils/set-page-title'
import { scrollToTop } from '../utils/scroll-to-top'

export const About = () => {
  useEffect(() => {
    setPageTitle('О проекте')
    scrollToTop()
  }, [])

  return (
    <>
      <h2 className="text-center">О проекте</h2>
      <hr />
    </>
  )
}