import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About/About'
import NoMatch from './Components/NoMatch'

export default (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route path='/contact' component={Contact} />
		<Route path='/about' component={About} />
		<Route component={NoMatch} />
	</Switch>
)
