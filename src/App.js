import './App.css';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import React from 'react';

const defaultTodos = [
	{ text: "Aprender react", completed: true },
	{ text: "Aprender vite", completed: true },
	{ text: "Aprender next.js", completed: true },
	{ text: "Aprender Astro", completed: false },
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {
          defaultTodos.map((todo) => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}



export default App;
