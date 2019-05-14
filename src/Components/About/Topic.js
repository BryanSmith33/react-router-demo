import React from 'react'

// destructuring match off of props
const Topic = ({ match }) => {
	// here we are calling match.params.topic, which we get from react router dom. The reason we are calling it topic is because that is what we called the param inside of the About component
	return <h2>{match.params.topic}</h2>
}

export default Topic
