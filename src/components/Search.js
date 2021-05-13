import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import { useGlobalContext } from '../context';

const Search = () => {
    const {
        search,
        handleSearch
    } = useGlobalContext();

    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    value={search}
                    onChange={handleSearch}
                />
            </InputGroup>
        </div>
    )
}

export default Search
