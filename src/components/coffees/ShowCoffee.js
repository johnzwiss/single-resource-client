import React, {useState, useEffect} from 'react'
import { getOneCoffee, updateCoffee, removeCoffee } from '../../api/coffees'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner, Container, Card, Button } from 'react-bootstrap'
import EditCoffeeModal from './EditCoffeeModal'

const ShowCoffee = (props) => {

    const [coffee, setCoffee] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)


    console.log('props in showPet', props)
    const { id } = useParams()
    const navigate = useNavigate()
    console.log('id in showPet', id)
    // empty dependency array in useEffect to act like component did mount
    useEffect(() => {
        getOneCoffee(id)
            .then(res => setCoffee(res.data.coffee))
            .catch(console.error)
    }, [updated])

    const removeTheCoffee = () => {
        removeCoffee(coffee._id)
            
             
            .then(() => {navigate(`/coffees`)})
            .catch(console.error)
    }

    if (!coffee) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }

    return (
        <>
        <Container className="fluid">
            <Card>
                <Card.Header>{coffee.fullTitle}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <small>Age: {coffee.name}</small><br/>
                        <small>Type: {coffee.roast}</small><br/>
                        <small>
                            Price: {coffee.price}
                        </small>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                        <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                            Edit Coffee
                        </Button>
                        <Button onClick={() => removeTheCoffee()}className="m-2" variant="danger">
                            Delete Coffee
                        </Button>

                    </Card.Footer>
            </Card>
        </Container>
        <EditCoffeeModal 
                coffee={coffee}
                show={modalOpen}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updateCoffee={updateCoffee}
                handleClose={() => setModalOpen(false)}
            />
        </>
    )
}

export default ShowCoffee