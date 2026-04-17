import InputField from "./InputField";
import AddButton from "./AddButton";

const TodoInput = ({ todo, onChange, onAdd }) => {
  return (
    <div className="input-container">
      <InputField todo={todo} onChange={onChange} />
      <AddButton onAdd={onAdd} />
    </div>
  );
};

export default TodoInput;