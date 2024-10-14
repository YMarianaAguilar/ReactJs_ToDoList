const TodoList = ({ todos, removeTodo }) => {
    return (
      <ul>
        {todos.map( todo => (
          <li key={todo.id}>
            {todo.text} 
            <button className="delete-button" onClick={() => removeTodo(todo.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TodoList;
  