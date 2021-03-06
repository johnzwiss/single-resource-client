import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}


const alwaysOptions = (
	<>
		<Nav.Item>
			<Link to='/coffees' style={linkStyle}>
				Home
			</Link>
		</Nav.Item>

		<Nav.Item className="m-2">
			<Link to='addCoffee' style={linkStyle}>
				Add Coffee
			</Link>
		</Nav.Item>
	</>
)

const Header = ({ user }) => (
	<Navbar bg='primary' variant='dark' expand='md'>
		<Navbar.Brand>
            <Link to='/coffees' style={linkStyle}>
                Coffee APP
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
