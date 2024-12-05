import './App.css';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import React from 'react';

// const defaultTodos = [
// 	{ text: "Aprender react", completed: false },
// 	{ text: "Aprender vite", completed: false },
// 	{ text: "Aprender next.js", completed: false },
// 	{ text: "Aprender Astro", completed: false },
// ];
// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS_V1");

function useLocalStorage(itemName, initialValue){
  const localStorageTodo = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageTodo){
    localStorage.setItem("TODOS_V1", JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageTodo);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem("TODOS_V1", JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];

}

function App() {  

  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {
          searchedTodos.map((todo) => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} 
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
            />
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}



export default App;
