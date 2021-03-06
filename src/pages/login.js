import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Login = () => {
    const {
        admin,
        authEmail,
        password,
        saveAuthEmail,
        savePassword,
        handleLoginSubmit
    } = useGlobalContext();

    return (
        <div className="items-center">
            <Form onSubmit={handleLoginSubmit} className="text-center w-500 mt-50">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={authEmail}
                        onChange={(e) => { saveAuthEmail(e) }}
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => { savePassword(e) }}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {
                    admin
                        ? <Link to="/registration" className="items-center mt-20 font-weight-600">
                            Registration Page
                        </Link>
                        : ""
                }
            </Form>
        </div>
    )
}

export default Login
