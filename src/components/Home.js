import IndexCoffees from "./coffees/IndexCoffee"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
	

	return (
		<>
			<h2>Home Page</h2>
			<IndexCoffees/>
		</>
	)
}

export default Home
