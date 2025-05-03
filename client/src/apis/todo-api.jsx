const API_URL = 'http://localhost:3000/todos';

export const fetchTodos = async () => {
    const res = await fetch(API_URL)
    if(!res.ok) throw new Error(console.log(Error))
    return await res.json();
}

export const createTodo = async (text) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({text})
    });
    if(!response.ok) {
        throw new Error(`${response.status}`)
    }
    return await response.json();
}

export const deleteTodo = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    if (!res.ok) {
        throw new Error(`${res.status}`)
    }
    return id;
}