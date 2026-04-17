const InputField = ({ todo, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Add a task"
      value={todo}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputField;
