import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import { App } from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const app = <BrowserRouter><App /></BrowserRouter>

ReactDOM.render(app, document.getElementById('root'))

serviceWorker.unregister()
