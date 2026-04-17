import DeleteButton from "./DeleteButton";

const TodoItem = ({ item, onToggle, onDelete }) => {
  return (
    <li
      onClick={() => onToggle(item.id)}
      style={{
        cursor: "pointer",
        textDecoration: item.completed ? "line-through" : "none",
        color: item.completed ? "gray" : "black",
      }}
    >
      <span>{item.todo}</span>
      <DeleteButton onDelete={() => onDelete(item.id)} />
    </li>
  );
};

export default TodoItem;
