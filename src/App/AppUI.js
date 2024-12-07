import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodosLoading } from '../TodosLoading/index'
import { TodosError } from '../TodosError/index'
import { EmptyTodos } from '../EmptyTodos/index'
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';

function AppUI(){    

	const {
          completeTodo, 
          deleteTodo, 
          loading, 
          error, 
          searchedTodos,
          openModal,
          setOpenModal
        } = React.useContext(TodoContext);

    return (
        <>
          <TodoCounter />
          <TodoSearch />
          <TodoList>

            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}

            {error && <TodosError />}

            {!loading && searchedTodos.length === 0 && <EmptyTodos />}

            {searchedTodos.map((todo) => (
                <TodoItem key={todo.text} 
                          text={todo.text} 
                          completed={todo.completed} 
                          onComplete = {() => completeTodo(todo.text)}
                          onDelete = {() => deleteTodo(todo.text)}/>))
              }

          </TodoList>
          <CreateTodoButton />

          {openModal && <Modal><h2>HOLA MUNDO DESDE UN PORTAL</h2></Modal>}
          
        </>
      );
}

export {AppUI}