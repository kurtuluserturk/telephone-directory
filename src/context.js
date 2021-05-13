import React, { useContext, useState } from "react"

const UserContext = React.createContext()

const UserProvider = ({ children }) => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [admin, setAdmin] = useState()
    const [password, setPassword] = useState("")
    const [people, setPeople] = useState([])
    const [peopleShown, setPeopleShown] = useState(false)
    const [search, setSearch] = useState("")

    const adminEmail = 'demo@sekizbit.com.tr'
    const adminPassword = '12346'

    const handleSearch = e => setSearch(e.target.value)

    const handleLoginSubmit = e => {
        e.preventDefault()

        if (adminEmail === email) {
            if (adminPassword === password) {
                const admin = { email, password }
                setAdmin(admin)
                localStorage.setItem('admin', JSON.stringify(admin))
                alert('Logged in successfully')
            }
            else {
                alert("Please check your password")
            }
        }
        else {
            alert("Please check your email")
        }
    }

    const saveFullName = (e) => {
        setFullName(e.target.value)
    }
    const saveEmail = (e) => {
        setEmail(e.target.value)
    }
    const savePhone = (e) => {
        setPhone(e.target.value)
    }
    const savePassword = (e) => {
        setPassword(e.target.value)
    }

    const addPerson = async () => {
        await fetch('http://localhost:3000/people', {
            method: 'POST',
            body: JSON.stringify({
                fullName: fullName,
                email: email,
                phone: phone
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then((response) => response.json())
        setPeopleShown(false)
        alert('The person saved')
    }

    const handleRegistrationSubmit = e => {
        e.preventDefault()

        if (phone.length === 11) {
            const firstPhoneDigit = phone.toString()[0]
            const secondPhoneDigit = phone.toString()[1]
            if (firstPhoneDigit == 0 && secondPhoneDigit == 5) {
                addPerson()
            }
            else {
                alert('Phone must start with 05')
            }
        }
        else {
            alert('Phone number must be 11 numbers')
        }
    }

    const showPeople = async () => {
        await fetch('http://localhost:3000/people')
            .then((response) => response.json())
            .then((people) => setPeople(people));
        setPeopleShown(true)
    }

    return (
        <UserContext.Provider
            value={{
                fullName,
                email,
                admin,
                phone,
                password,
                peopleShown,
                people,
                search,
                handleSearch,
                addPerson,
                showPeople,
                handleLoginSubmit,
                saveFullName,
                saveEmail,
                savePhone,
                savePassword,
                handleRegistrationSubmit
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(UserContext)
};

export { UserContext, UserProvider }