import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Headers';
import Footer from './components/Footer';


function App() {
  const [todoList, setTodoList] = useState([]);
  const [filterOption, setFilterOption] = useState('all');



  function handleToggle(todo) {
    const newTodoList = todoList.map(item => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    });
    setTodoList(newTodoList);
  }


  function handleDelete(todo) {
    const newTodoList = todoList.filter(item => item.id !== todo.id);
    setTodoList(newTodoList);
  }

  function clearCompleted() {
    setTodoList([]);
  }

  function addTodo() {
    const input = document.querySelector('.new-todo');
    const title = input.value.trim();
    if (title) {
      const newTodoList = [
        ...todoList,
        {
          id: todoList.length + 1,
          title,
          completed: false
        }
      ];
      setTodoList(newTodoList);
      input.value = '';
    }
  }



  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        filterOption={filterOption}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
      {
        todoList.length > 0 && (
          <Footer
            todoList={todoList}
            setFilterOption={setFilterOption}
            clearCompleted={clearCompleted}
          />
        )
      }
    </section>
  );
};


export default App;
