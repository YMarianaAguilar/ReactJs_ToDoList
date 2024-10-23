import { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, updateTodo, editingTodo }) => {
  const [inputValue, setInputValue] = useState('');

  // Si editingTodo cambia, actualizamos el inputValue con el texto de la tarea a editar
  useEffect(() => {
    if (editingTodo) {
      setInputValue(editingTodo.text);  // Mostrar el texto de la tarea en el input
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      if (editingTodo) {
        updateTodo(editingTodo.id, inputValue);  // Llama a la función para actualizar
      } else {
        addTodo(inputValue);  // Si no estamos editando, agregamos una tarea nueva
      }
      setInputValue('');  // Reiniciar el input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder={editingTodo ? "Editar tarea" : "Agregar nueva tarea"} 
      />
      <button className="add-button" type="submit">
        {editingTodo ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
};

export default TodoForm;
