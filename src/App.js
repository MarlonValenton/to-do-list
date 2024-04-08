import Form from "./components/Form";
import Header from "./components/Header";
import FilterButton from "./components/FilterButton";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import taskList from "./components/TodoList"
import { useState } from "react";


const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);


function App() {

  const task = []
  const [tasks, setTasks] = useState(task); 
  const [filter, setFilter] = useState("All");

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const taskList = tasks
  .filter(FILTER_MAP[filter])

  function addTask(name) {
    const newTask = { id: name, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function handleDeleteTask(id){
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  


  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;

  
return (
  <div className="todoapp stack-large">
    <h1>TaskLister</h1>
    <Form addTask={addTask} />
    <div className="filters btn-group stack-exception">
      {filterList}
    </div>
    <h2 id="list-heading">{headingText}</h2>
    <TodoList tasks={tasks}
      onDeleteTask = {handleDeleteTask}
      ontoggleTaskCompleted={toggleTaskCompleted}
      oneditTask={editTask}/>
  </div>
);
}

export default App;
