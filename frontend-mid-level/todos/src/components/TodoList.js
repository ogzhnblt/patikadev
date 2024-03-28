import TodoItem from './TodoItem';

function TodoList({ todoList, filterOption, handleToggle, handleDelete }) {
  const filteredTodoList = todoList.filter(todo => {
    if (filterOption === 'all') return true;
    return filterOption === 'completed' ? todo.completed : !todo.completed;
  });

  return (
    <section className="main">
      <ul className="todo-list">
        {filteredTodoList.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
