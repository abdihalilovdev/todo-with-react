import React, {useEffect, useState} from 'react';
import uniqID from 'uniqid'
import TodoList from "./TodoList";
import axios from "axios";

const Todo = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    /**GET**/
    const getAllTask = async () => {
        try {
            // const response = await fetch('https://63f1f1a1aab7d09125fe6898.mockapi.io/task')
            // const data = await response.json()
            // setTodos(data)
            const response = await axios('https://63f1f1a1aab7d09125fe6898.mockapi.io/task')
            setTodos(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    /** DELETE **/
    const deleteTodo = async (id) => {
        // setTodos(todos.filter(el => el.id !== id))
        try {
            // fetch('https://63f1f1a1aab7d09125fe6898.mockapi.io/task/' + id, {
            //     method: 'DELETE'
            // })
            await axios.delete(`https://63f1f1a1aab7d09125fe6898.mockapi.io/task/${id}`)
            getAllTask()
        } catch (e) {
            console.log(e)
        }
    }

    /** POST **/
    const handleClick = async () => {
        // const newTodos = {
        //     title: value,
        // }
        // setTodos([...todos, newTodos])
        if (value.trim().length > 0) {
            try {
                // await fetch('https://63f1f1a1aab7d09125fe6898.mockapi.io/task/', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify(newTodos)
                // })
                await axios.post('https://63f1f1a1aab7d09125fe6898.mockapi.io/task/', {
                    title: value,
                })
                getAllTask()
            } catch (e) {
                console.log(e)
            }
        }
    }

    /**PUT**/
    const updateTodo = async (id, newTitle) => {
        // setTodos(todos.map(el => el.id === id ? {...el, title: newTitle} : el))
        // const updateTodo = {
        //     title: newTitle,
        // }
        try {
            // await fetch('https://63f1f1a1aab7d09125fe6898.mockapi.io/task/' + id, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(updateTodo)
            // })

            await axios.put('https://63f1f1a1aab7d09125fe6898.mockapi.io/task/' + id, {
                title: newTitle,
            })

            getAllTask()
        } catch (e) {
            console.log(e)
        }
    }

    /**PUT**/
    const updateStatus = async (id) => {
        // setTodos(todos.map(el => el.id === id ? {...el, isDone: !el.isDone} : el))
        const found = todos.find(el => el.id === id)
        // const updateStatus = {
        //     isDone: !found.isDone
        // }
        try {
            // await fetch(`https://63f1f1a1aab7d09125fe6898.mockapi.io/task/${id}`, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(updateStatus)
            // })

            await axios.put(`https://63f1f1a1aab7d09125fe6898.mockapi.io/task/${id}`, {
                isDone: !found.isDone
            })
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAllTask()
    }, [])

    return (
        <div>
            <div className='w-[400px] items-center flex mx-auto mt-24'>
                <input
                    onChange={handleChange}
                    className="w-[400px] mx-2 outline-none border-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search" required/>
                <button
                    onClick={handleClick}
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">add
                </button>
            </div>

            <div className='w-[500px] mt-14 rounded mx-auto bg-amber-400 px-5 py-2'>
                {
                    todos.filter(el => !el.isDone).map(el => <TodoList
                        key={el.id}
                        el={el}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                        updateStatus={updateStatus}
                    />)
                }
            </div>

            <p className='text-center bg-amber-50 mt-10'>Законченные дела</p>

            <div className='w-[500px] mt-14 rounded mx-auto bg-amber-400 px-5 py-2'>
                {
                    todos.filter(el => el.isDone).map(el => <TodoList
                        key={el.id}
                        el={el}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                        updateStatus={updateStatus}
                    />)
                }
            </div>

        </div>
    );
};

export default Todo;