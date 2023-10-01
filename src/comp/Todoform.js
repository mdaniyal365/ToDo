import React, { useState, useContext } from "react";
import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
//   InputGroupAddon
} from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../context/Todocontext";
import { Todo_Add } from "../context/action.type";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please enter a todo");
    }

    const todo = {
      todoString,
      id: v4()
    };
    dispatch({
      type: Todo_Add,
      payload: todo
    });

    setTodoString("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={todoString}
            onChange={e => setTodoString(e.target.value)}
          />
      
            <Button
              color="warning"
              //TODO: onclick
            >
              Add
            </Button>
       
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
