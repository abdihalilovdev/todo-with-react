import React, {useState} from 'react';
import TextInput from "../../Ui/TextInput";
import ContactList from "./ContactList";
import uniqID from 'uniqid'
import TelInput from "react-phone-input-2";
import PhoneInput from "../../Ui/PhoneInput";

const Contacts = () => {
    const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || [])
    const [number, setNumber] = useState('')
    const [values, setValues] = useState({
        id: uniqID(),
        name: '',
        surname: '',
        number: number,
    })

    const [validation, setValidation] = useState({
        id: uniqID(),
        name: false,
        surname: false,
        number: false,
    })

    function PrintError() {
        setValidation({
            name: values.name === '',
            surname: values.surname === '',
            number: number === '',
        })
    }

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value, number: number})
        // setValidation({...validation,[e.target.name] : e.target.value === ''})
    }

    function ResetInputs() {
        setValues({name: '', surname: '', number: '', id: uniqID()})
    }

    const createContact = () => {
        PrintError()
        if (values.name !== '' && values.surname !== '' && number !== '') {
            let users = JSON.parse(localStorage.getItem('contacts')) || []
            users = [...users, {...values,number}]
            setContacts(users)
            localStorage.setItem('contacts', JSON.stringify(users))
            ResetInputs()
        }
    }

    const updateContact = (id, newContact) => {
        let users = JSON.parse(localStorage.getItem('contacts')) || []
        users = users.map(el => el.id === id ? {...el, ...newContact} : el)
        setContacts(users)
        localStorage.setItem('contacts', JSON.stringify(users))
    }

    const deleteBtn = (id) => {
        let users = JSON.parse(localStorage.getItem('contacts')) || []
        users = users.filter(el => el.id !== id)
        setContacts(users)
        localStorage.setItem('contacts', JSON.stringify(users))
    }

    return (
        <div className='container'>
            <div className='w-[540px] mt-10 flex flex-col items-center mx-auto bg-amber-500 px-8 py-6'>
                <h1 className='text-center font-mono text-blue-50 text-[2rem]'>ADD TO CONTACT</h1>
                <TextInput name='name' type='text' value={values.name} handleChange={handleChange} pl='Asan'
                           error={validation.name}/>
                <TextInput name='surname' type='text' value={values.surname} handleChange={handleChange} pl='Usonov'
                           error={validation.surname}/>
                {/*<TextInput name='number' type='text' value={values.number} handleChange={handleChange} pl='+996(***) ** ** **' error={validation.number}/>*/}
                <PhoneInput value={values.number} setNumber={setNumber} error={validation.number}/>
                <button
                    onClick={createContact}
                    className='text-[20px] bg-amber-50 px-4 py-2 hover:bg-amber-400 mt-2 rounded'
                >Create
                </button>
            </div>

            <div className='w-[65%] mt-10 flex flex-col items-center mx-auto bg-amber-500 px-6 py-4'>
                {
                    contacts.map(el => <ContactList
                        deleteBtn={deleteBtn}
                        updateContact={updateContact}
                        el={el}
                        key={el.id}
                    />)
                }
            </div>

        </div>
    );
};

export default Contacts;