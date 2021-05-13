import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Registration = () => {
    const {
        admin,
        fullName,
        email,
        phone,
        saveFullName,
        saveEmail,
        savePhone,
        handleRegistrationSubmit,
        removeAdminFromLocalStorage
    } = useGlobalContext();

    return (
        <div>
            {
                admin
                    ? <div className="items-center">
                        <div className="text-center w-500 mt-50">
                            <Form onSubmit={handleRegistrationSubmit}>

                                <Form.Group controlId="formBasicFirstName">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Full Name"
                                        value={fullName}
                                        onChange={(e) => { saveFullName(e) }}
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

                            <Button
                                className="mt-20"
                                variant="primary"
                                type="submit"
                                onClick={removeAdminFromLocalStorage}
                            >
                                <Link to="/" className="items-center color-white" >
                                    Exit
                                </Link>
                            </Button>

                            <Link to="/people" className="items-center mt-50 font-weight-600">
                                People List
                            </Link>
                        </div>
                    </div>
                    : <h4 className="items-center">You have to login to see this page</h4>
            }
        </div>
    )
}

export default Registration
