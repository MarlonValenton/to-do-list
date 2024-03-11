
import Todo from "./Todo";
function TodoList({tasks, onDeleteTask}) {

        return (
            <div className="todoapp stack-large">
            <h2 id="list-heading">Tasks Remaining</h2>
            <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
          {tasks.map((task) => (
          <Todo
          taskList={task}
          key={task.id}
          onDeleteTask={onDeleteTask}
          />
          ))}

          </ul>
          </div>
        )
};

export default TodoList;