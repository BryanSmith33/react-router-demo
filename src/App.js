import React from 'react'
import './App.css'
// importing HashRouter to use in our app
import { HashRouter } from 'react-router-dom'
// using a navbar so we don't have to type out our URL each time in the URL bar
import Navbar from './Components/Navbar'
// importing our router which is just our Switch component
import router from './router'

function App() {
	return (
		<div className='App'>
      {/* Notice here that we are using <HashRouter></HashRouter> inside of App.js */}
      {/* HashRouter needs to be inside of App.js so that all of our child components can have the ability to be routed to */}
      {/* Another common pattern is to wrap your router in the index.js but stick with this for now */}
			<HashRouter>
        {/* Navbar allows us to link to different pages */}
				<Navbar />
        {/* router is what will dynamically update what is viewed in our browser */}
				{router}
			</HashRouter>
		</div>
	)
}

export default App
