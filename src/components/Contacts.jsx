import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { contacts } from "../services/actions/Action"
function Contacts() {
    const Prevcontacts = useSelector(state => state.Reducer.contacts)
    console.log("prevCon", Prevcontacts);

    const [contact, setContact] = useState(Prevcontacts)

    const dispatch = useDispatch()
    const handleChange = (e) => {
        setContact(e.target.value)

    }
    const handleDispatch = () => {
        dispatch(contacts(contact))
        setContact(" ")
    }
    return (
        <div>

            <h1>contacts updation:{Prevcontacts}</h1>
            <input type='text' onChange={handleChange}></input>
            <button onClick={handleDispatch}>Set Name</button>
        </div>
    )
}

export default Contacts
