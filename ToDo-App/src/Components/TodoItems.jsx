import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-conatiner">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default TodoItems;
