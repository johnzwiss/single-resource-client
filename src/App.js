// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import Home from './components/Home'
import CreateCoffee from './components/coffees/CreateCoffee'
import ShowCoffee from './components/coffees/ShowCoffee'

const App = () => {

  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  console.log('user in app', user)
  console.log('message alerts', msgAlerts)
  const clearUser = () => {
    console.log('clear user ran')
    setUser(null)
  }

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}

		return (
			<Fragment>
				<Header user={user} />
				<Routes>
					<Route path='/coffees' element={<Home msgAlert={msgAlert} />} />
				
					<Route
					path='/addCoffee'
					element={
					
					<CreateCoffee msgAlert={msgAlert} user={user} />
					}
				/>
				<Route
					path='/coffees/:id'
					element={
						
					<ShowCoffee msgAlert={msgAlert} user={user} />
					}
				/>
     
				</Routes>
				{msgAlerts.map((msgAlert) => (
					<AutoDismissAlert
						key={msgAlert.id}
						heading={msgAlert.heading}
						variant={msgAlert.variant}
						message={msgAlert.message}
						id={msgAlert.id}
						deleteAlert={deleteAlert}
					/>
				))}
			</Fragment>
		)
}

export default App
