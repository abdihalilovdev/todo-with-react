import React from 'react';
import Modal from "../Modal";

const ContactList = ({el, updateContact, deleteBtn}) => {
    const header = el.name[0] + el.surname[0]

    return (
        <div className='flex items-center my-2 justify-between bg-white rounded mx-auto px-4 py-2 w-full'>
            <div className='flex items-center'>
                <div
                    className='bg-amber-500 w-12 h-12 rounded-[50%] flex justify-center items-center font-bold text-red-50'
                >{header && header.toUpperCase()}</div>
                <div className='flex flex-col mx-2'>
                    <h2 className='text-[24px] font-bold'>{el.name}</h2>
                    <h2 className='text-[21px]'>{el.surname}</h2>
                </div>
            </div>
            <a className='text-[20px]' href="tel:220 290 138">{el.number}</a>
            <div>
                <Modal
                    updateContact={updateContact}
                    el={el}
                />
                <button
                    onClick={() => deleteBtn(el.id)}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >delete
                </button>
            </div>
        </div>
    );
};

export default ContactList;