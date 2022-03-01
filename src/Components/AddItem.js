import ToDoList from "./TodoList";
import { Link } from "react-router-dom";

const AddItem = () => {
  return (
    <>
      <Link to="/addTodos">
        <button>Add Item</button>
      </Link>
      <ToDoList />
    </>
  );
};

export default AddItem;
