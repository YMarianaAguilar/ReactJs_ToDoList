import { useState } from 'react';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);  // Estado para almacenar la tarea a editar

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
    setEditingTodo(null);  // Reiniciar el estado de edición después de actualizar
  };

  const startEditing = (todo) => {
    console.log('Editando tarea:', todo);
    setEditingTodo(todo);  // Almacenar la tarea que estamos editando
  };

  return { todos, addTodo, removeTodo, updateTodo, editingTodo, startEditing };
};
