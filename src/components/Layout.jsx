import React from 'react'
import { Navbar } from './Navbar'

export const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="container">
      <div className="row py-3">
        <div className="col-md-10 col-lg-9 mx-auto">
          {children}
        </div>
      </div>
    </main>
  </>
)