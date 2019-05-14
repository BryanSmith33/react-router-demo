import React from 'react'
import { Link, Route } from 'react-router-dom'
import Topic from './Topic'

// here we are dynamically useing the Topic component to use Reacts composition model to create a component
// We destructure a proper off of our prop called match. This is given to us from react router dom
const About = ({ match }) => {
	return (
		<div>
			<h1>About</h1>
			{/* rather than typing out /about/story, we can take advantage of match.path */}
			<Link to={`${match.path}/story`}>Story</Link>
			<Link to={`${match.path}/faq`}>FAQ</Link>
			{/* Here we are using Route. This will display our Topic component. Notice that we are passing in a param called topic. */}
			<Route path={`${match.path}/:topic`} component={Topic} />
		</div>
	)
}

export default About
