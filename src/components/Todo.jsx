import { useState } from "react";
function Todo({taskList, onDeleteTask, ontoggleTaskCompleted, oneditTask}) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    taskList.oneditTask(taskList.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={taskList.id}>
          New name for {taskList.name}
        </label>
        <input
        id={taskList.id}
        className="todo-text"
        type="text"
         value={newName}
         onChange={handleChange}
        />

      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel"
        onClick={() => setEditing(false)}>
          Cancel
          <span className="visually-hidden">renaming {taskList.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {taskList.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={taskList.id}
          type="checkbox"
          defaultChecked={taskList.completed}
          onChange={() => ontoggleTaskCompleted(taskList.id)}
        />
        <label className="todo-label" htmlFor={taskList.id}>
          {taskList.name}
        </label>
      </div>
      <div className="btn-group">
      <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{taskList.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => onDeleteTask (taskList.id)}>
          Delete <span className="visually-hidden">{taskList.name}</span>
        </button>
      </div>
    </div>
  );


  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;

  }
  
  export default Todo;
  