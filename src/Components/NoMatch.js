import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
	return (
		<div>
			<h1>This isn't the page you are looking for!</h1>
			<Link to='/'>Go Home!</Link>
		</div>
	)
}

export default NoMatch
