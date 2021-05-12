import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Registration = () => {
    const {
        firstName,
        lastName,
        email,
        phone,
        saveFirstName,
        saveLastName,
        saveEmail,
        savePhone,
        handleRegistrationSubmit
    } = useGlobalContext();

    return (
        <>
            <div className="items-center">
                <Form onSubmit={handleRegistrationSubmit} className="text-center w-500 mt-50">

                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>FirstName</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="FirstName"
                            value={firstName}
                            onChange={(e) => { saveFirstName(e) }}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>LastName</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="LastName"
                            value={lastName}
                            onChange={(e) => { saveLastName(e) }}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="05XX-XXXXXX"
                            value={phone}
                            onChange={(e) => { savePhone(e) }}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => { saveEmail(e) }}
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Save
                </Button>
                </Form>


            </div>
            <Link to="/people" className="items-center mt-50">
                People List
            </Link>
        </>
    )
}

export default Registration
