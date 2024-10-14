import { useTodos } from './useTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';  // Importa el archivo de estilos

function App() {
  const { todos, addTodo, removeTodo } = useTodos();

  return (
    <div className="container"> {/* Añadimos la clase container */}
      <h1>Lista de Tareas</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
