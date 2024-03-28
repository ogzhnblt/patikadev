function Header({ addTodo }) {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={addTodo}>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus />
        </form>
      </header>
    );
  }
  
  export default Header;
  