function Footer({ todoList, setFilterOption, clearCompleted }) {
    const itemsLeft = todoList.filter(todo => !todo.completed).length;
  
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{itemsLeft}</strong> items left
        </span>
        <ul className="filters">
          <li>
            <a href="#/" onClick={() => setFilterOption('all')}>All</a>
          </li>
          <li>
            <a href="#/active" onClick={() => setFilterOption('active')}>Active</a>
          </li>
          <li>
            <a href="#/completed" onClick={() => setFilterOption('completed')}>Completed</a>
          </li>
        </ul>
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
  
    export default Footer;
  