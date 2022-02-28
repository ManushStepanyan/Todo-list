import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TodoProvider from "./Context/context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <TodoProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TodoProvider>,
  document.getElementById("root")
);
