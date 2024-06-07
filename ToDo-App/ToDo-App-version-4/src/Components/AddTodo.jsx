import { useContext, useState } from "react";
import { TodoItemsContext } from "../Store/Todo-Item-Store";

function AddTodo() {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const { addNewItem } = useContext(TodoItemsContext);
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const hangleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    addNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={hangleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
