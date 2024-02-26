import Todo from "./Todo";
function TodoList(props) {
    const taskList = props.tasks?.map((task) => (
        <Todo
          id={task.id}
          name={task.name}
          completed={task.completed}
          key={task.id}
        />
    ));
        return (
            <div className="todoapp stack-large">
            <h2 id="list-heading">3 tasks remaining</h2>
            <ul
              role="list"
              className="todo-list stack-large stack-exception"
              aria-labelledby="list-heading">
              {taskList}
            </ul>
          </div>
        )
};

export default TodoList;