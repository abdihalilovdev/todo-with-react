import React from 'react';

const TextInput = ({type, pl, deleteBtn, handleChange, name, value, defValue, error}) => {
    return (
        <input
            name={name}
            deleteBtn={deleteBtn}
            onChange={handleChange}
            placeholder={pl}
            type={type}
            value={value}
            defaultValue={defValue}
            className='px-4 py-2  border-none outline-none rounded my-2 w-full'
            style={{
                border: error ? '3px solid red' : ''
            }}
        />
    );
};

export default TextInput;