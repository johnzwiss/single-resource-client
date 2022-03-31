import React, {useState} from "react";
import {createCoffee} from '../../api/coffees'
import {Form, Container, Button} from 'react-bootstrap'

const CreateCoffee = () =>  { 
    //we'll need two states 
    const [coffee, setCoffee] = useState({name: "", roast: "", price: ""})
    // an empty pet object 
    // created id used to nav
    // we'll need handChange and handleSubmit funcs

    const handleChange = (e) => {
        e.persist() 
        setCoffee(prevCoffee => {
            const name = e.target.name
            let value = e.target.value
            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }
            const updatedValue = { [name]: value}
            
            // req.body.available = req.body.available === 'on' ? true : false
            console.log(prevCoffee)
            console.log(updatedValue)
           
            return{...prevCoffee, ...updatedValue}
           
        })
       
    }
    
    const handleSubmit = (e) => {
        e.preventDefault() 
            createCoffee(coffee)
            .then(console.log("this is the coffee", coffee.price, 10))
            .catch(console.error)

    }

    return (
        <Container className = "justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                placeholder= "Coffee"
                value = {coffee.name}
                name = 'name'
                onChange = {handleChange}
                />
                <Form.Label>Roast</Form.Label>
                <Form.Control
                placeholder= "Roast"
                value = {coffee.roast}
                name = 'roast'
                onChange = {handleChange}
                />
                <Form.Label>Price</Form.Label>
                 <Form.Control
                placeholder= "Price"
                type = "number"
                value = {coffee.price}
                name = 'price'
                onChange = {handleChange}
                />
                <Button type="submit">Submit</Button>
            </Form>
           
        </Container>
    )
}

export default CreateCoffee