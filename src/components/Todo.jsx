function Todo({taskList, onDeleteTask}) {
    return (
      <li className="todo stack-small">
        <div className="c-cb">
  <input id={taskList.id} type="checkbox" defaultChecked={taskList.completed} />
  <label className="todo-label" htmlFor={taskList.id}>
    {taskList.name}
  </label>
</div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">{taskList.name}</span>
          </button>
          <button type="button" className="btn btn__danger"onClick={() => onDeleteTask (taskList.id)}>
            Delete <span className="visually-hidden"></span>
          </button>
        </div>
      </li>
    );
  }
  
  export default Todo;
  