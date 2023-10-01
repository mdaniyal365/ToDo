import logo from './logo.svg';
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import { useReducer, useState } from 'react';
import TodoReducer from './context/reducer'
import { TodoContext } from './context/Todocontext';
import { v4 } from "uuid";
import { type } from '@testing-library/user-event/dist/type';
import{Todo_Add,Remove_Todo} from './context/action.type'
import Todos from './comp/todos'
import TodoForm from './comp/Todoform';
import { useEffect } from 'react';

function App() {
  
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}> 
      <Container fluid>
        <h1>Todo App with Context API</h1>
        <Todos />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
