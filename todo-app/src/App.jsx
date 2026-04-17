import { useState } from "react";
import Title from "./components/Title";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodoList([...todoList, { id: Date.now(), todo, completed: false }]);
    setTodo("");
  };

  const toggleComplete = (id) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container">
      <Title title="Todo App" />
      <TodoInput todo={todo} onChange={setTodo} onAdd={addTodo} />
      <TodoList todoList={todoList} onToggle={toggleComplete} onDelete={deleteTodo} />
    </div>
  );
};

export default App;