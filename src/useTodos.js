import {useState} from 'react';

export const useTodos = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, {id: Date.now(), text: todo }]);

    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));

    };

    const updateTodo = (id, newText) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo )));

    };

    return {todos, addTodo, removeTodo, updateTodo};
}
