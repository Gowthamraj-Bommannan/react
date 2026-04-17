const DeleteButton = ({ onDelete }) => {
  return (
    <button
      className="delete-btn"
      onClick={(e) => {
        e.stopPropagation();
        onDelete();
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
