
import Todo from "./Todo";
import  { useState } from 'react';
function TodoList({tasks, onDeleteTask, ontoggleTaskCompleted, oneditTask}) {

        return (
            <div className="todoapp stack-large">
            <h2 id="list-heading">Tasks Remaining</h2>
            <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
          {tasks.map((task) => (
          <Todo
          taskList={task}
          key={task.id}
          onDeleteTask={onDeleteTask}
          completed={task.completed}
          ontoggleTaskCompleted={ontoggleTaskCompleted}
          oneditTask={oneditTask}
          />
          ))}

          </ul>
          </div>
        )
};

export default TodoList;