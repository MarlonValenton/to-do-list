import Todo from "./Todo";
function FilterButton(taskList) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={taskList.isPressed}
      onClick={() => taskList.setFilter(taskList.name)}>
      <span className="visually-hidden">Show </span>
      <span>{taskList.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;