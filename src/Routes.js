import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CounterApp from './Counter-Functional-component-using-redux/App'

function Routing() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/CounterApp'>Counter using redux App</Link>
          </li>
        </ul>
        <hr />
        <Route path='/CounterApp' component={CounterApp} />
      </div>
    </Router>
  )
}

export default Routing
