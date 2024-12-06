import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodosLoading } from '../TodosLoading/index'
import { TodosError } from '../TodosError/index'
import { EmptyTodos } from '../EmptyTodos/index'

function AppUI({
        completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos,
        completeTodo, deleteTodo, loading, error
    }
){    
    return (
        <>
          <TodoCounter completed={completedTodos} total={totalTodos}/>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
          <TodoList>

            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && (
              <TodosError />
            )}

            {!loading && searchedTodos.length === 0 && <EmptyTodos />}

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
        </>
      );
}

export {AppUI}