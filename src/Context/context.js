import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const TodoContext = createContext();

const todos = [
  {
    id: 0,
    name: "Manush",
    surname: "Stepanyan",
    age: 32,
  },
];

function TodoProvider(props) {
  const [todoList, setTodoList] = useState(todos);
  const [newTodo, setNewTodo] = useState(todos);

  const context = useContext(TodoContext);

  const addTodo = (todo) => {
    setTodoList((prevState) => [
      ...prevState,
      { ...todo, id: todoList.length },
    ]);
  };
  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <TodoContext.Provider
        value={{
          id: todoList.length - 1,
          todoList: todoList,
          addTodo: addTodo,
          removeTodo: removeTodo,
        }}
      >
        {props.children}
      </TodoContext.Provider>
    </div>
  );
}

export default TodoProvider;
