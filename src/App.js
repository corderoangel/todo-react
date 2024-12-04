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
	{ text: "Aprender next.js", completed: false },
	{ text: "Aprender Astro", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={1} total={4}/>
      <TodoSearch/>
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
