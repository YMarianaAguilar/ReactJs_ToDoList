const TodoList = ({ todos, removeTodo, startEditing }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <div className="button-container">
            <button className="delete-button" onClick={() => removeTodo(todo.id)}>Eliminar</button>
            <button className="edit-button" onClick={() => startEditing(todo)}>
              <i className="fas fa-edit"></i>
            </button> 
            </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
