import React, {useState} from 'react';
import ContactList from "../ContactList";
import TextInput from "../../../Ui/TextInput";
import uniqID from "uniqid";

const Modal = ({el,updateContact}) => {
    const [modal,setModal] = useState(false)
    const [updateValue,setUpdateValue] = useState({
        id: uniqID(),
        name: el.name,
        surname: el.surname,
        number: el.number,
    })
    const handleChange = (e) => {
        setUpdateValue({...updateValue,[e.target.name] : e.target.value})
    }
    return (
        <>
            <button type="button"
                    onClick={() => setModal(true)}
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
            >edit</button>
         <div
             hidden={!modal}
             onClick={() => setModal(false)}
             className='top-0 bottom-0 right-0 left-0 fixed z-10 bg-black/50'/>
            <div
                    hidden={!modal}
                className='bg-white/90 w-[570px] fixed left-[32%] top-[50px] rounded px-4 py-4 z-50'>
                <h1 className='text-[2rem] font-mono'>EDIT CONTACT</h1>
             <TextInput name='name' type='text' defValue={el.name} handleChange={handleChange}/>
             <TextInput name='surname' type='text' defValue={el.surname} handleChange={handleChange}/>
             <TextInput name='number' type='text' defValue={el.number} handleChange={handleChange}/>
                <button
                    onClick={()=> {
                        updateContact(el.id,updateValue)
                        setModal(false)
                    }}
                    className="text-white my-2 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >save
                </button>
            </div>

        </>
    );
};

export default Modal;