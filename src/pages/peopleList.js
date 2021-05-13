import React from 'react'
import { useState } from 'react'
import { Table } from 'react-bootstrap'

const PeopleList = () => {
    const [peopleShown, setPeopleShown] = useState(false)

    const showPeople = () => {
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            console.log(xhr.response)
        }

        xhr.open("GET", "./data.json");

        xhr.send();
    }

    return (
        <div className="text-center w-500">
            <h2>People list</h2>
            <button
                onClick={showPeople}
            >
                Show People
            </button>
            {
                peopleShown
                    ? <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>053545465</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>053545465</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@asdksa</td>
                                <td>059845465</td>
                            </tr>
                        </tbody>
                    </Table>
                    : ""
            }

        </div>
    )
}

export default PeopleList
