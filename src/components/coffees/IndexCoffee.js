import React, {useState, useEffect} from 'react'
import {getAllCoffees} from '../../api/coffees'

const IndexCoffees = (props) => {
    const [coffees, setCoffees] = useState(null) 

    useEffect(() => {
        getAllCoffees()
            .then(res => {
                setCoffees(res.data.pets)
            })
            .catch(console.error)
    }, [])

    if (!coffees) {
        return <p>loading...</p>
    } else if (coffees.length ===0) {
        return <p>no pets yet</p>
    }

    let coffeesJsx

    if (coffees.length > 0) {
        coffeesJsx = coffees.map(coffee=> (
            <li key={coffee.id}>
                {coffee.name}
                {coffee.roast}  
            </li>
        ))
    }

    return (
        <>
            <h3> all the coffees</h3>
            <ul>
                {coffeesJsx}
            </ul>
        </>
    )
}

export default IndexCoffees