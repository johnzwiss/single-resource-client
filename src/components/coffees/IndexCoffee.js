import React, {useState, useEffect} from 'react'
import {getAllCoffees} from '../../api/coffees'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}


const IndexCoffees = (props) => {
    const [coffees, setCoffees] = useState(null) 

    useEffect(() => {
        getAllCoffees()
            .then(res => {
                setCoffees(res.data.coffees)
                console.log(res.data.coffees)
            })
            .catch(console.error)
    }, [])

    if (!coffees) {
        return <p>loading...</p>
    } else if (coffees.length ===0) {
        return <p>no pets yet</p>
    }

    let coffeeCards

    if (coffees.length > 0) {
        
        coffeeCards = coffees.map(coffee => (
            //one method of styling usually reserved for a single style
            //we can use inline, just like in html
            <Card key={coffee.id} style={{width: '30%'}}>
                <Card.Header>{coffee.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                       <Link to ={`/coffees/${coffee._id}`}>{coffee.name}</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
            ))
            
    }

    return (
        <>
        <h3>All the coffees</h3>
        <div style={cardContainerLayout}>
            {coffeeCards}
        </div>
    </>
  )
    }

export default IndexCoffees