import {fetchTodos, createTodo, deleteTodo} from '../apis/todo-api.jsx';
import Form from '../components/Form.jsx'
import TodoList from '../components/TodoList.jsx'
import { useState, useEffect } from 'react';

function Todos() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const loadTodos = async () => {
            setLoading(true); // Устанавливаем состояние загрузки
            try {
                const data = await fetchTodos();
                setTodos(data);
            } catch (err) {
                setError(err.message); // Сохраняем сообщение об ошибке
                console.error('Failed to fetch todos:', err);
            } finally {
                setLoading(false); // В любом случае снимаем состояние загрузки
            }
        };
        loadTodos();
    }, []);

    const handleDeleteTodo = async (id) => {
        try {
            await deleteTodo(id);
            setTodos(prev => prev.filter(todo => todo.id !== id))
        } catch(err) {
            console.log('Delete error', err)
        }
    };

    const handleAddTodo = async (text) => {
        try {
            const newTodo = await createTodo(text)
            setTodos(prev => [...prev, newTodo])
        } catch(err) {
            console.log(err)
        }
    }

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>

    return (
        <div>
            <Form onAdd={handleAddTodo}/>
            <TodoList todos={todos} onDelete={handleDeleteTodo}/>
        </div>
    )
}

export default Todos