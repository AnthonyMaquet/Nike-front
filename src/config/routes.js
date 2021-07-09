import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Index from '../screens/index'
import Jersey from '../screens/jersey'
import Shoes from '../screens/shoes'
import Clothing from '../screens/clothing'
import Accessories from '../screens/accessories'

const Routing = (props) => {
  const PublicRoute = ({ component: Component, ...props }) => {
    return <Route {...props} render={(innerProps) => <Component {...innerProps} />} />
  }

  return (
    <Router>
      <Switch>
        <PublicRoute exact {...props} path='/' component={Index} />
        <PublicRoute exact {...props} path='/shoes' component={Shoes} />
        <PublicRoute exact {...props} path='/jersey' component={Jersey} />
        <PublicRoute exact {...props} path='/clothing' component={Clothing} />
        <PublicRoute exact {...props} path='/accessories' component={Accessories} />
      </Switch>
    </Router>
  )
}

export default Routing
