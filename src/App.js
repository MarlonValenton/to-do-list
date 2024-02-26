import Form from "./components/Form";
import Todo from "./components/Todo";
import Header from "./components/Header";
import FilterButton from "./components/FilterButton";
import TodoList from "./components/TodoList";
import DATA from "./components/Data";

function App(props) {
  return (
    <div className="todoapp stack-large">
      <Header/>
      <Form />
      
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <TodoList tasks={DATA}/>
      </div>

  );
}

export default App;
