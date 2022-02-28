import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../Context/context";

const PopupTodos = () => {
  const context = useContext(TodoContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();
  
  return (
    <div className="add-todos">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="input your name"
      />
      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder="input your surname"
      />
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="input your age"
      />
      <button
        style={{width: "50%"}}
        type="button"
        onClick={() => {
          if (name !== "" || surname !== "" || age !== "") {
            context.addTodo({
              name: name,
              surname: surname,
              age: age,
            });
            setName("");
            setSurname("");
            setAge("");
            navigate ('..')
          }
        }}
      >
        Add New Element
      </button>
    </div>
  );
};

export default PopupTodos;
