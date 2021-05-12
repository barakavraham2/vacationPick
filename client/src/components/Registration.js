import React, { useState } from 'react'
import { Form, Col, Button, Alert } from 'react-bootstrap'
import '../App.css'
import { registran } from '../services/userService'
function Registration() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [errorMassege, setErrorMassege] = useState('')

    const handleSubmit = async () => {
        try {
            const res = await registran({ email, password, firstName, lastName, phoneNum })
            localStorage.setItem('token', res.headers['x-auth-token'])
            window.location = '/'
        }
        catch (ex) {
            if (ex.response && ex.response.status == 400)
                setErrorMassege(ex.response.data)

        }


    }



    return (
        <div className="regisrtPage">
            <Form className="regisrt">
                <h1>Welcome to vacation site</h1>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" claa="form-outline" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>first name</Form.Label>
                        <Form.Control onChange={(e) => setFirstName(e.target.value)} />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>last name</Form.Label>
                        <Form.Control onChange={(e) => setLastName(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>phone number</Form.Label>
                        <Form.Control onChange={(e) => setPhoneNum(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                {errorMassege && <Alert variant='danger'>
                    {errorMassege}
                </Alert>}


                <Button variant="primary" type="button" onClick={handleSubmit}>
                    Submit
  </Button>
            </Form>
        </div>
    )
}

export default Registration
