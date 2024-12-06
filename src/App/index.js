import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
// 	{ text: "Aprender react", completed: false },
// 	{ text: "Aprender vite", completed: false },
// 	{ text: "Aprender next.js", completed: false },
// 	{ text: "Aprender Astro", completed: false },
// ];
// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS_V1");

function App() {    

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;