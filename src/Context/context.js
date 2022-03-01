import React, { createContext, useContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const todos = [
  {
    id: 0,
    name: "Manush",
    surname: "Stepanyan",
    age: 32,
  },
];

function TodoProvider(props) {
  const [todoList, setTodoList] = useState(todos);

  const addTodo = (todo) => {
    setTodoList((prevState) => [
      ...prevState,
      { ...todo, id: todoList.length },
    ]);
  };
  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const updateTodo = (newName,newSurname, newAge, id) => {
    const newTodos = [...todoList];
    newTodos.forEach((todo,index) => {
      if(index === id){
        todo.name = newName;
        todo.surname = newSurname;
        todo.age = newAge;
      }
    })
    setTodoList(newTodos);
  }

  return (
    <div>
      <TodoContext.Provider
        value={{
          id: todoList.length - 1,
          todoList: todoList,
          addTodo,
          removeTodo,
          updateTodo,
        }}
      >
        {props.children}
      </TodoContext.Provider>
    </div>
  );
}

export default TodoProvider;