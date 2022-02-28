import React, { useContext, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Print from "./Components/Print";
import ToDoList from "./Components/TodoList";
import { TodoContext } from "./Context/context";
import PopupTodos from "./PopupTodos/PopupTodos";

function App() {
  const context = useContext(TodoContext);

  return (
    <>
      <Print />
      <div className="container">
        <div>List</div>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <Link to="/addTodos">
                    <button>Add Item</button>
                  </Link>
                  <ToDoList />
                </>
              }
            />
            <Route path="/addTodos" element={<PopupTodos />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
