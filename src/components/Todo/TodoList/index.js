import React, {useState} from 'react';

const TodoList = ({el, deleteTodo,updateTodo,updateStatus}) => {
    const [edit, setEdit] = useState(false)
    const [newValue,setNewValue] = useState(el.title)
    const handleChangeNew = (event) => {
        setNewValue(event.target.value)
    }
    const openInput = () => {
        setEdit(true)
    }
    const closeInput = (id,newTitle) => {
        updateTodo(id,newTitle)
        setEdit(false)
    }
    return (
        <div className='flex justify-between my-2 items-center bg-emerald-400 py-2 px-2 rounded'>

            <div className='flex'>
                <input
                    defaultChecked={el.isDone}
                    onClick={() => updateStatus(el.id)}
                    type="checkbox"/>
                {
                    edit ? <input
                            onChange={handleChangeNew}
                            defaultValue={el.title}
                            type="text"
                            className='px-2 py-2 rounded outline-none'/>
                        : <h1>{el.title}</h1>
                }
            </div>

            <div>
                <button type="button"
                        onClick={() => edit ? closeInput(el.id,newValue) : openInput()}
                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                >{edit ? 'close' : 'edit'}
                </button>
                <button
                    onClick={() => deleteTodo(el.id)}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >delete
                </button>
            </div>
        </div>
    );
};

export default TodoList;