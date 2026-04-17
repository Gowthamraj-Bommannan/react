import TodoItem from "./TodoItem";

const TodoList = ({ todoList, onToggle, onDelete }) => {
  return (
    <ul className="todo-list">
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
