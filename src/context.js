import React, { useContext, useState } from "react"

const UserContext = React.createContext()

const UserProvider = ({ children }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [admin, setAdmin] = useState()
    const [password, setPassword] = useState("")

    const adminEmail = 'demo@sekizbit.com.tr'
    const adminPassword = '12346'

    const handleLoginSubmit = e => {
        e.preventDefault()

        if (adminEmail === email && adminPassword === password) {
            const admin = { email, password }
            setAdmin(admin)
            localStorage.setItem('admin', JSON.stringify(admin))
        }
        else {
            alert("Please check your email and password")
        }
    }

    const saveFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const saveLastName = (e) => {
        setLastName(e.target.value)
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

    const handleRegistrationSubmit = e => {
        e.preventDefault()

        if (phone.length === 10) {
            const firstPhoneDigit = phone.toString()[0]
            const secondPhoneDigit = phone.toString()[1]
            if (firstPhoneDigit == 0 && secondPhoneDigit == 5) {
                const userInfo =
                {
                    firstName,
                    lastName,
                    email,
                    phone
                }
                console.log(JSON.stringify(userInfo))
            }
            else {
                alert('Phone must start with 05')
            }
        }
        else {
            alert('Phone number must be 10 numbers')
        }
    }

    return (
        <UserContext.Provider
            value={{
                firstName,
                lastName,
                email,
                admin,
                phone,
                password,
                handleLoginSubmit,
                saveFirstName,
                saveLastName,
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