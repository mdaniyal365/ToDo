import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import { TodoContext } from "../context/Todocontext";
import { Remove_Todo } from "../context/action.type";
import './todos.css'

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ListGroup className="mt-5 mb-2 items">
      {todos.map(todo => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span
            className="floatRight"
            onClick={() => {
              dispatch({
                type: Remove_Todo,
                payload: todo.id
              });
            }}
          >
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
