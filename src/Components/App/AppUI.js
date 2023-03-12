import React from 'react';
import { TodoContext } from '../../Context/TodoContext';
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButtom/CreateTodoButton";
import {Modal} from "../Modal/Modal"
import { TodoForm } from '../TodoForm/TodoForm';

//Recibimos estas propiedades que hay que enviarselas a sus respectivos componentes
function AppUI()
{
    const {
      error, 
      loading, 
      searchedTodos, 
      completeTodo, 
      deleteTodo,
      openModal,
      setOpenModal} = React.useContext(TodoContext);

    return (
        <React.Fragment>
          <TodoCounter />
          <TodoSearch />
          <TodoList>
            {error && <p>¡Hubo un error!</p>}
            {loading && <p>Cargando...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
            {searchedTodos.map(todo =>(
              <TodoItem 
              key={todo.text} 
              texto={todo.text} 
              completado={todo.completed} 
              onComplete={() => completeTodo(todo.text)} 
              onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

          {!!openModal && (
            <Modal>
              <TodoForm />
              {/* <p>{searchedTodos[0]?.text}</p> */}
            </Modal>
          )}

          <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>
        </React.Fragment>
    );
}

export {AppUI}; 