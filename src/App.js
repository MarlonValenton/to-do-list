import Form from "./components/Form";
import Header from "./components/Header";
import FilterButton from "./components/FilterButton";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const task = [
    { id: "0", name: "Eat", completed: true },
    { id: "1", name: "Sleep", completed: false },
    { id: "2", name: "Repeat", completed: false },
  ]
  const [tasks, setTasks] = useState(task); 
  const [filteredTasks, setFilteredTasks] = useState([...task]); 
  
  function handleAddTask({name}){
    // let newId = Math.max(...tasks.map((t) => t.id ), 0) + 1;
    // setTasks([...tasks, { id: newId.toString(), name }])
    setTasks((tasks => [...tasks, task]));
    console.log(tasks);
  }

  function handleDeleteTask(id){
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  // function filterHandler(type){
  //   if (type === 'All') {
  //     setFilteredTasks(task);
  //   } else if (type === 'Completed') {
  //     setFilteredTasks(tasks.filter ((task) => task.completed));
  //   } else if (type === 'Uncompleted') {  
  //     setFilteredTasks(tasks.filter ((task) => !task.completed));
  //   }
  // }

  
  return (
    <div className="todoapp stack-large">
      <Header/>
      <Form onAddTask = {handleAddTask} />
      
      <div className="filters btn-group stack-exception">
        <FilterButton />
      </div>
      <TodoList tasks={tasks}
      onDeleteTask = {handleDeleteTask}/>
      </div>

  );
}

export default App;
