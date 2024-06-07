import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItemsContextProvider from "./Store/Todo-Item-Store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <div className="item-container">
          <TodoItems />
        </div>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
