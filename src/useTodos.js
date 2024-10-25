import { useState, useEffect } from 'react';

export const useTodos = () => {

  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
  
  const [todos, setTodos] = useState(initialTodos); // Cargar los todos desde localStorage al iniciar 
  const [editingTodo, setEditingTodo] = useState(null); //Estado para las tareas
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); //Actualizar localStorage cada vez que el estado de todos cambie

  //Función para agregar una nueva tarea
  const addTodo = (todo) => {
    const newTodo = { id: Date.now(), text: todo };
    setTodos([...todos, newTodo]);
  };

  //Función para eliminar una tarea
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  //Función para actualizar (editar) una tarea
  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
    setEditingTodo(null);
  };

  //Almacenar la tarea que estamos editando
  const startEditing = (todo) => {
    setEditingTodo(todo);
  };

  return { todos, addTodo, removeTodo, updateTodo, editingTodo, startEditing };
};