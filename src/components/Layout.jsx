import React from 'react'
import { Navbar } from './Navbar'

export const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="container py-3">
      {children}
    </main>
  </>
)