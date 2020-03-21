import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.navbarCollapse = React.createRef()
  }

  handleClickToggler = () => this.setState({ isOpen: !this.state.isOpen })
  handleClickNavLink = () => {
    this.setState({ isOpen: false })
    this.navbarCollapse.current.className = 'navbar-collapse collapse'
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center" to="/home">
            <div className="logo-image mr-1"
              style={{ backgroundImage: 'url(/assets/logo.png)' }}>
            </div>
            <span className="navbar-title">Задачи Мудрецов</span>
          </NavLink>
          <button className={`navbar-toggler ${this.state.isOpen ? '' : 'collapsed'}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.handleClickToggler}
          >
            <FontAwesomeIcon icon={this.state.isOpen ? faTimes : faBars} />
          </button>
          <div className='navbar-collapse collapse'
            id="navbarNav"
            ref={this.navbarCollapse}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/tasks/" onClick={this.handleClickNavLink}>
                  Задачи
              </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={this.handleClickNavLink}>
                  О проекте
              </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}