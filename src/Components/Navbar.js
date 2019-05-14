import React from 'react'
// importing Link from react router dom. Remember, Link tells our browser to go to specific spot. Switch then takes over and determines the route in the URL bar and what component to display
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
		<nav>
			{/* Link requires one prop (but more are available) called to */}
			{/* to determines where our browser should change our URL to  */}
			<Link to='/'>Home</Link>
			<Link to='/contact'>Contact</Link>
			<Link to='/about'>About</Link>
		</nav>
	)
}

export default Navbar