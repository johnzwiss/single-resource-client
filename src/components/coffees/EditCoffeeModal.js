import React, { useState } from 'react'
import {Modal, Container, Form, Button} from 'react-bootstrap'


const EditCoffeeModal = (props) => {
    const { user, show, handleClose, updateCoffee, msgAlert, triggerRefresh } = props
    const [coffee, setCoffee] = useState(props.coffee)

    const handleChange = (e) => {
        // e === event
        e.persist()

        setCoffee(prevCoffee => {
            const name = e.target.name
            let value = e.target.value

            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }

            const updatedValue = { [name]: value }

            console.log('prevPet', prevCoffee)
            console.log('updatedValue', updatedValue)

            return {...prevCoffee, ...updatedValue}
        })
        
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        console.log('the pet to submit', coffee)
        updateCoffee(coffee)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            // then we send a success message
            
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(console.error)
               
        console.log('this is the coffee', coffee)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
        </Modal>
    )
}
    
export default EditCoffeeModal