import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AddItem from "./Components/AddItem";
import Print from "./Components/Print";
import { TodoContext } from "./Context/context";
import PopupTodos from "./PopupTodos/PopupTodos";

function App() {
  const context = useContext(TodoContext);

  return (
    <div className='container'>
      <div className='hh'>
        <div>List</div>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <AddItem />
              }
            />
            <Route path="/addTodos" element={<PopupTodos />} />
          </Routes>
        </div>
      </div>
      <Print />
    </div>
  );
}

export default App;