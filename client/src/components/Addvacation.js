import { useState } from 'react'
import { Form, Col, Button, Alert } from 'react-bootstrap'
import { setVacations } from '../services/vacationService'

function Addvacation(props) {
    const [destination, setDestination] = useState('')
    const [description, setDescription] = useState('')
    const [startAt, setStartAt] = useState('')
    const [endAt, setEndAt] = useState('')
    const [price, setPrice] = useState('')
    const [img, setImg] = useState('')
    const [errorMassege, setErrorMassege] = useState('')

    const handleSubmit = async () => {
        try {
            const res = await setVacations({ destination, description, startAt, endAt, price, img })
            if (res.status === 200) {
                props.setTrigger(false)
                window.location.reload(false)

            }
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400)
                setErrorMassege(ex.response.data)

        }


    }



    return (props.trigger) ? (
        <div className="popOutAddVacation">
            <Form className="addVacationInner">
                <h1>add vacation</h1>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>destination</Form.Label>
                        <Form.Control type="text" placeholder="destination" claa="form-outline" onChange={(e) => setDestination(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>start at</Form.Label>
                        <Form.Control type="date" onChange={(e) => setStartAt(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>end at</Form.Label>
                        <Form.Control type="date" onChange={(e) => setEndAt(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>price</Form.Label>
                        <Form.Control placeholder="price" onChange={(e) => setPrice(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>img</Form.Label>
                        <Form.Control placeholder="img" onChange={(e) => setImg(e.target.value)} />
                    </Form.Group>
                </Form.Row>


                {errorMassege && <Alert variant='danger'>
                    {errorMassege}
                </Alert>}


                <Button variant="primary" type="button" onClick={handleSubmit}>
                    Submit
  </Button>
                <Button variant="primary" type="button" onClick={() => props.setTrigger(false)}>
                    Close
  </Button>
            </Form>
        </div >
    ) : ""
}


export default Addvacation;