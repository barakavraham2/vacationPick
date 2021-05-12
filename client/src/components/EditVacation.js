import { useState } from 'react'
import { Form, Col, Button, Alert } from 'react-bootstrap'
import { editVacations } from '../services/vacationService'

export default function EditVacation(props) {
    const [destination, setDestination] = useState(props.vacation.destination)
    const [description, setDescription] = useState(props.vacation.description)
    const [startAt, setStartAt] = useState(props.vacation.startAt)
    const [endAt, setEndAt] = useState(props.vacation.endAt)
    const [price, setPrice] = useState(props.vacation.price)
    const [img, setImg] = useState(props.vacation.img)
    const id = props.vacation.id
    const [errorMassege, setErrorMassege] = useState('')
    const handleSubmit = async () => {
        try {
            const res = await editVacations({ id, destination, description, startAt, endAt, price, img })
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
        <div className="popOutEditVacation">
            <Form className="addVacationInner">
                <h1>Edit vacation</h1>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>destination</Form.Label>
                        <Form.Control defaultValue={props.vacation.destination} type="text" placeholder="destination" onChange={(e) => setDestination(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control defaultValue={props.vacation.description} type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>start at</Form.Label>
                        <Form.Control defaultValue={props.vacation.startAt} type="date" onChange={(e) => setStartAt(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>end at</Form.Label>
                        <Form.Control defaultValue={props.vacation.endAt} type="date" onChange={(e) => setEndAt(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>price</Form.Label>
                        <Form.Control defaultValue={props.vacation.price} placeholder="price" onChange={(e) => setPrice(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>img</Form.Label>
                        <Form.Control defaultValue={props.vacation.img} placeholder="img" onChange={(e) => setImg(e.target.value)} />
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
