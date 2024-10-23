import { useTodos } from './useTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const { todos, addTodo, removeTodo, updateTodo, editingTodo, startEditing } = useTodos();

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <TodoForm addTodo={addTodo} updateTodo={updateTodo} editingTodo={editingTodo} /> {/* Pasa updateTodo y editingTodo */}
      <TodoList todos={todos} removeTodo={removeTodo} startEditing={startEditing} /> {/* Pasa startEditing */}
    </div>
  );
}

export default App;
