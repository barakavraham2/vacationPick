import { Form, Col, Button, Alert } from 'react-bootstrap'
import React, { useState } from 'react'
import { LoginUser } from '../services/userService'

function Login() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errorMassege, setErrorMassege] = useState('')

    const handleSubmit = async (e) => {

        try {
            const res = await LoginUser({ email, password })
            localStorage.setItem('token', res.headers['x-auth-token'])
            console.log(res)
            window.location = '/'
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400)
                setErrorMassege(ex.response.data)

        }
    }

    return (
        <div className="LogInPage">
            <Form className="LogIn">
                <h1>Welcome to vacation site</h1>
                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" claa="form-outline" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                {errorMassege && <Alert variant='danger'>
                    {errorMassege}
                </Alert>}
                <Button variant="primary" type="button" onClick={handleSubmit}> Log in</Button>
            </Form>
        </div>
    )
}

export default Login
