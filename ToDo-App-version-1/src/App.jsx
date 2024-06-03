import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "26/05/2024",
    },
    {
      name: "Go to College",
      dueDate: "27/05/2024",
    },
    {
      name: "Buying Pen",
      dueDate: "266/05/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="item-container">
        <TodoItems todoItems={todoItems} />
      </div>
    </center>
  );
}

export default App;
