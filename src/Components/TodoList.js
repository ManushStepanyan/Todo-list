import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../Context/context";

const ToDoList = () => {
  const context = useContext(TodoContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [index, setIndex] = useState(null);
  const [todo, setTodo] = useState(context.todoList);

  const handleEdit = (e, id) => {
    context.todoList.map((item) => {
      if (item.id === id) {
        setName(item.name);
        setSurname(item.surname);
        setAge(item.age);
        return true;
      }
      return;
    });
  };

  return (
    <div className="todos-content">
      {context.todoList.map((item, i) => {
        return (
          <div className="todos-box" key={item.id}>
            {index === i ? (
              <div>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                    if (index === i) item.name = e.target.value;
                  }}
                  value={name}
                />

                <input
                  onChange={(e) => {
                    setSurname(e.target.value);
                    if (index === i) item.surname = e.target.value;
                  }}
                  value={surname}
                />

                <input
                  onChange={(e) => {
                    setAge(e.target.value);
                    if (index === i) item.age = e.target.value;
                  }}
                  value={age}
                />
                
              </div>
            ) : (
              <div>
                {item.name} {item.surname} <br />
                {item.age}
              </div>
            )}

            <div>
              <button
                className="delete-edit"
                onClick={() => context.removeTodo(item.id)}
              >
                Delete
              </button>

              <button
                type="submit"
                className="delete-edit"
                onClick={(e) => {
                  handleEdit(e, item.id);
                  setIndex(index === i ? null : i);
                }}
              >
                {index === i ? "Update" : "Edit"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
