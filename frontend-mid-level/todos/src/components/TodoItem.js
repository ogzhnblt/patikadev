function TodoItem({ todo, handleToggle, handleDelete }) {
    return (
      <li className={todo.completed ? 'completed' : ''}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo)}
          />
          <label>{todo.title}</label>
          <button className="destroy" onClick={() => handleDelete(todo)} />
        </div>
      </li>
    );
  }
  
  export default TodoItem;
  