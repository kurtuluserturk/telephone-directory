import React from 'react'
import { Button, Table } from 'react-bootstrap'
import Search from '../components/Search';
import { useGlobalContext } from '../context';

const PeopleList = () => {
    const {
        admin,
        search,
        people,
        showPeople,
        peopleShown
    } = useGlobalContext();

    return (
        <div>
            {
                admin
                    ? <div className="items-center">
                        <div className="text-center w-500 mt-50">
                            <h2>People list</h2>
                            <Search />
                            <Button onClick={showPeople}>
                                Show People
                            </Button>
                            {
                                peopleShown
                                    ? <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Full Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                people.filter(person => person.fullName.toLowerCase().includes(search.toLowerCase())).map((person) => {
                                                    return <tr key={person.id}>
                                                        <td>{person.id}</td>
                                                        <td>{person.fullName}</td>
                                                        <td>{person.email}</td>
                                                        <td>{person.phone}</td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                    : ""
                            }
                        </div>
                    </div>
                    : <h4 className="items-center">You have to login to see this page</h4>
            }
        </div>
    )
}

export default PeopleList
