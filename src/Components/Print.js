import { useContext } from "react";
import { TodoContext } from "../Context/context";

const Print = () => {
  const context = useContext(TodoContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        border: "1px solid black",
        padding: "3%",
        backgroundColor: "rgb(223, 221, 221)",
        borderRadius: "6px",
      }}
    >
      {context.todoList.map((item) => {
        return (
          <div
            key={item.id}
            style={{ padding: "1%", border: "1px solid black" }}
          >
            {item.name} {item.surname} {item.age}
          </div>
        );
      })}
    </div>
  );
};

export default Print;
